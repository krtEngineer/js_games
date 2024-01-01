import { gameBtnContent } from "./constant.js";
import { reStartGame, startGame } from "./game.js";
import { getElement } from "./utils.js";

const gameBtn = getElement(".game-btn");

gameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let gameBtnTxtContent = gameBtn.textContent.toLowerCase();
  if (gameBtnTxtContent === gameBtnContent.initialContent) {
    startGame();
  } else if (gameBtnTxtContent === gameBtnContent.gameContent) {
    reStartGame();
  } else {
    throw new Error("Invalid button clicked.");
  }
});
