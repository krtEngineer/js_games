import { getEmojieList } from "./emojis.js";
import { getElement, getElementList } from "./utils.js";

import { getBlockStruct } from "./structure.js";

const pairsDataValue = getElement(".pairs-data").children[1];
const totalMovesValue = getElement(".total-moves-data").children[1];
const blocks = getElement(".blocks");
const gameBtn = getElement(".game-btn");

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
  blocks.innerHTML = getBlockStruct();
};

const initializeGame = () => {
  setPairsMatched(0);
  setTotalMoves(0);
  setBlockContent();
};

initializeGame();

/**
 * New game click event listener
 */
gameBtn.addEventListener("click", () => {
  initializeGame();
});
