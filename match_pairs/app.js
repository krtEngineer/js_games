import { getEmojieList } from "./emojis.js";
import { getElement, getElementList } from "./utils.js";

import {
  getBlocksStruct,
  getBlockStruct,
  defaultEmojiContent,
} from "./structure.js";

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
};

const setPairsMatched = (matchedPairsCount) => {
  gameVariables.pairsMatched = matchedPairsCount;
  pairsDataValue.textContent = `${matchedPairsCount}/8`;
};

const setTotalMoves = (totalMovesCount) => {
  gameVariables.totalMoves = totalMovesCount;
  totalMovesValue.textContent = `${totalMovesCount}`;
};

const setBlockContent = () => {
  blocks.innerHTML = getBlocksStruct();

  [...blocks.children].forEach((block) => {
    block.addEventListener("click", (e) => {
      e.preventDefault();
      blockClickListener(e);
    });
  });
};

const initializeGame = () => {
  setPairsMatched(0);
  setTotalMoves(0);
  setBlockContent();
  emojiList = getEmojieList(8);
};

initializeGame();

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
  setTotalMoves(++gameVariables.totalMoves);
  const selectedBlock = e.currentTarget;
  const { selectedIndex, selectedContent } =
    getSelectedBlockData(selectedBlock);
  selectedBlock.innerHTML = getNewBlockContent(selectedIndex, selectedContent);
};

const getSelectedBlockData = (selectedBlock) => {
  let selectedBlockContent = selectedBlock.children[0];
  let selectedIndex = selectedBlockContent.dataset.id;
  let selectedContent = selectedBlockContent.dataset.content;
  return { selectedIndex, selectedContent };
};

const getNewBlockContent = (selectedIndex, selectedContent) => {
  let isSelected = selectedContent.toLowerCase() === "default";
  let content = isSelected ? emojiList[selectedIndex] : defaultEmojiContent;
  return getBlockStruct(content, selectedIndex, isSelected);
};
