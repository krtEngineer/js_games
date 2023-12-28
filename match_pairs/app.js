import { getEmojieList } from "./emojis.js";
import { getElement, getElementList } from "./utils.js";

import { getBlockContentStruct } from "./structure.js";

const container = getElement(".container");
const pairsDataValue = getElement(".pairs-data").children[1];
const totalMovesValue = getElement(".total-moves-data").children[1];
const blockList = document.querySelectorAll(".block");

// container.innerHTML = getEmojieList(8)
//   .map((emojiCode) => {
//     return ` <h1>${emojiCode}</h1>`;
//   })
//   .join("");

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
  blockList.forEach((block) => {
    block.appendChild(getBlockContentStruct());
  });
};

const initializeGame = () => {
  setPairsMatched(0);
  setTotalMoves(0);
  setBlockContent();
};

initializeGame();
