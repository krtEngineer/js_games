import { getEmojieList } from "./emojis.js";
import { getElement, isResultValid } from "./utils.js";
import { maxScore, defaultEmojiContent } from "./constant.js";
import { getBlocksStruct, getBlockStruct } from "./structure.js";

const pairsDataValue = getElement(".pairs-data").children[1];
const totalMovesValue = getElement(".total-moves-data").children[1];
const blocks = getElement(".blocks");
const gameBtn = getElement(".game-btn");

let emojiList = [];

/**
 * to set initial screen do following
 * set pairs matched to 0/8
 * set total moves to 0
 * set initial blcok content
 */

const gameVariables = {
  pairsMatched: 0,
  totalMoves: 0,
  selectedBlocks: [],
};

const setPairsMatched = (matchedPairsCount) => {
  gameVariables.pairsMatched = matchedPairsCount;
  pairsDataValue.textContent = `${matchedPairsCount}/8`;
};

const setTotalMoves = (totalMovesCount) => {
  gameVariables.totalMoves = totalMovesCount;
  totalMovesValue.textContent = `${totalMovesCount}`;
};

const setSelectedBlocks = (block) => {
  if (!isResultValid(block)) {
    gameVariables.selectedBlocks = [];
  } else {
    if (gameVariables.selectedBlocks.length === 2) {
      gameVariables.selectedBlocks[0] = gameVariables.selectedBlocks[1];
      gameVariables.selectedBlocks[1] = block;
    } else {
      gameVariables.selectedBlocks.push(block);
    }
  }
};

/**
 * New game click event listener
 */
gameBtn.addEventListener("click", () => {
  initializeGame();
});

/**
 * Event listener for click event on block
 */

const blockClickListener = (e) => {
  const selectedBlock = e.currentTarget;
  if (isBlockLocked(selectedBlock.children[0])) {
    return;
  }
  setTotalMoves(++gameVariables.totalMoves);
  const { selectedIndex, selectedContent } =
    getSelectedBlockData(selectedBlock);
  setSelectedBlocks(selectedBlock);
  selectedBlock.innerHTML = getNewBlockContent(selectedIndex, selectedContent);
  /**
   * if two blocks are selected
   */
  if (gameVariables.selectedBlocks.length === 2) {
    let index_1 = getSelectedBlockData(
      gameVariables.selectedBlocks[0]
    ).selectedIndex;
    let index_2 = getSelectedBlockData(
      gameVariables.selectedBlocks[1]
    ).selectedIndex;

    if (!areSelectedBlocksSame(index_1, index_2)) {
      //1. get new score
      let previousScore = gameVariables.pairsMatched;
      setNewScore();
      let newScore = gameVariables.pairsMatched;

      if (previousScore === newScore) {
        //then make selected blocks default
        setSelectedBlockData(
          [defaultEmojiContent, defaultEmojiContent],
          [index_1, index_2],
          false,
          false
        );
      } else if (newScore > previousScore) {
        /**
         * after getting a match do following
         * 1. increment pairs matched.
         * 2. lock blocks.
         * 3. make selecte blocks empty
         */
        setPairsMatched(newScore);
        setSelectedBlockData(
          [emojiList[index_1], emojiList[index_2]],
          [index_1, index_2],
          true,
          true
        );
      } else {
        //invalid case throw esception
        throw new Error("Invalid score");
      }
    }
    setSelectedBlocks();
    if (isGameFinished()) {
      setTimeout(initializeGame, 1000);
    }
  }
};

const setSelectedBlockData = (contentList, indexList, isLocked, isSelected) => {
  gameVariables.selectedBlocks[0].innerHTML = getBlockStruct(
    contentList[0],
    indexList[0],
    isSelected,
    isLocked
  );
  gameVariables.selectedBlocks[1].innerHTML = getBlockStruct(
    contentList[1],
    indexList[1],
    isSelected,
    isLocked
  );
};

const areSelectedBlocksSame = (index_1, index_2) => {
  return index_1 === index_2;
};

const isBlockLocked = (block) => {
  return block.classList.contains("locked");
};

const getSelectedBlockData = (selectedBlock) => {
  let selectedBlockContent = selectedBlock.children[0];
  let selectedIndex = +selectedBlockContent.dataset.id;
  let selectedContent = selectedBlockContent.dataset.content;
  return { selectedIndex, selectedContent };
};

const getNewBlockContent = (
  selectedIndex,
  selectedContent,
  isLocked = false
) => {
  let isSelected = selectedContent.toLowerCase() === "default";
  let content = isSelected ? emojiList[selectedIndex] : defaultEmojiContent;
  return getBlockStruct(content, selectedIndex, isSelected, isLocked);
};

const setNewScore = () => {
  if (!isGameFinished()) {
    gameVariables.pairsMatched += areBlocksSame();
  }
};

const isGameFinished = () => {
  return gameVariables.pairsMatched === maxScore;
};

const areBlocksSame = () => {
  return (
    getSelectedBlockData(gameVariables.selectedBlocks[0]).selectedContent ===
    getSelectedBlockData(gameVariables.selectedBlocks[1]).selectedContent
  );
};

const setBlockContent = () => {
  blocks.innerHTML = getBlocksStruct();

  [...blocks.children].forEach((block) => {
    block.addEventListener("click", blockClickListener);
  });
};

const initializeGame = () => {
  setPairsMatched(0);
  setTotalMoves(0);
  setBlockContent();
  setSelectedBlocks();
  emojiList = getEmojieList(8);
};

initializeGame();
