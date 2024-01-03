import { getElement } from "./utils.js";
import {
  containerGridRowStyle,
  gameBtnContent,
  maximumTime,
} from "./constant.js";
import {
  setScore,
  setTime,
  setCalculatedBestScore,
  setCurrFruitCount,
} from "./game-variable.js";
import { setFruits, removeFruits } from "./fruit.js";

const gameBtn = getElement(".game-btn");
const container = getElement(".container");
const gameData = getElement(".game-data");
const gameContainer = getElement(".game-container");
const imgContainer = getElement(".img-container");
const gameDescription = getElement(".game-desc");

export const setInitialView = () => {
  showImgContainer();
  showGameDesc();
  setContainerGridStyle(containerGridRowStyle.initialView);
  hideGameContainer();
  hideGameData();
  changeGameBtnContent(gameBtnContent.initialContent);
};

export const setGameView = () => {
  hideImgContainer();
  hideGameDesc();
  setContainerGridStyle(containerGridRowStyle.gameView);
  showGameContainer();
  showGameData();
  changeGameBtnContent(gameBtnContent.gameContent);
};

const hideImgContainer = () => {
  if (!imgContainer.classList.contains("hide")) {
    imgContainer.classList.add("hide");
  }
};

const hideGameDesc = () => {
  if (!gameDescription.classList.contains("hide")) {
    gameDescription.classList.add("hide");
  }
};

const showGameContainer = () => {
  if (gameContainer.classList.contains("hide")) {
    gameContainer.classList.remove("hide");
    // addFruitItems();
    setFruits();
  }
};

const showGameData = () => {
  if (gameData.classList.contains("hide")) {
    gameData.classList.remove("hide");
    setGameDataContent();
  }
};

export const setGameDataContent = () => {
  setTime(maximumTime);
  setCalculatedBestScore();
  setScore(0);
  setCurrFruitCount(0);
};

const showImgContainer = () => {
  if (imgContainer.classList.contains("hide")) {
    imgContainer.classList.remove("hide");
  }
};

const showGameDesc = () => {
  if (gameDescription.classList.contains("hide")) {
    gameDescription.classList.remove("hide");
  }
};

const setContainerGridStyle = (templateRows) => {
  container.style.gridTemplateRows = templateRows;
};

const hideGameContainer = () => {
  if (!gameContainer.classList.contains("hide")) {
    removeFruits();
    gameContainer.classList.add("hide");
  }
};

const hideGameData = () => {
  if (!gameData.classList.contains("hide")) {
    gameData.classList.add("hide");
    setGameDataContent();
  }
};

const changeGameBtnContent = (textContent) => {
  gameBtn.textContent = textContent;
};
