/**
 * Incrementing roll count on clicking roll button
 */
const rollCount = document.querySelector("#roll-count");

const gameBtn = document.querySelector(".game-btn");
const increaseRollsCount = () => {
  let currRollsCount = +rollCount.textContent;
  currRollsCount++;
  rollCount.textContent = `${currRollsCount}`;
};

/**
 * Assigning dice faces
 */
import { diceFace } from "./diceFaces.js";
const diceBlocks = document.querySelectorAll(".dice-block");

const getRandomDiceFaceHtml = () => {
  return diceFace[`${getRandomNumber()}`][`html`];
};

// Get random number between 1 to 6
const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const assignDiceFaces = () => {
  [...diceBlocks].map((diceBlock) => {
    if (!isDiceBlockSelected(diceBlock)) {
      diceBlock.innerHTML = getRandomDiceFaceHtml();
    }
  });
};
let updateTimeCountdown;
let gameStatusCoutdown;

// Action on clicking game button
gameBtn.addEventListener("click", () => {
  if (gameBtn.textContent.toLowerCase() === "start game") {
    if (dices.classList.contains("hide")) {
      dices.classList.remove("hide");
    }
    gameBtn.textContent = "roll";
    updateTimeCountdown = setInterval(updateTime, 1000);
    gameStatusCoutdown = setInterval(gameStatusCheck, 500);
  }

  assignDiceFaces();
  increaseRollsCount();
});

/**
 * Change color when selecting any dice
 */
[...diceBlocks].map((diceBlock) => {
  diceBlock.addEventListener("click", () => {
    diceBlock.classList.toggle("dice-selected");
  });
});

// Check if dice block selected or not
const isDiceBlockSelected = (diceBlock) => {
  return diceBlock.classList.contains("dice-selected");
};

// Check if game finished
const hasGameFinished = () => {
  const commonClass = diceBlocks[0].classList[1];
  let correctDiceCount = 0;
  [...diceBlocks].map((diceBlock) => {
    const diceClass = diceBlock.classList[1];
    if (isDiceBlockSelected(diceBlock) && commonClass === diceClass) {
      correctDiceCount++;
    } else {
      return;
    }
  });
  return correctDiceCount === 10;
};

const gameStatusCheck = () => {
  if (hasGameFinished()) {
    clearInterval(updateTimeCountdown);
    clearInterval(gameStatusCoutdown);
    updateBestTime();
    initialSetup();
  }
};

/**
 * Change time and store best time
 */
let currRunningTime = 0;
const currTime = document.querySelector("#time");
const bestTime = document.querySelector("#best-time");

const setBestTime = () => {
  let currBestTime = +localStorage.getItem("bestTime");
  bestTime.textContent = `${currBestTime}s`;
};

const updateTime = () => {
  currRunningTime++;
  currTime.textContent = `${currRunningTime}s`;
};

const updateBestTime = () => {
  let currBestTime = localStorage.getItem("bestTime");
  if (currBestTime === null || currBestTime === undefined) {
    storeBestTime(currRunningTime);
  } else {
    currBestTime = +currBestTime;
  }
  if (currRunningTime < currBestTime) {
    storeBestTime(currRunningTime);
  }
};

const storeBestTime = (currRunningTime) => {
  localStorage.setItem("bestTime", currRunningTime);
};

/**
 * Initial game setup
 */

const dices = document.querySelector(".dices");

const initialSetup = () => {
  gameBtn.textContent = `start game`;
  dices.classList.add("hide");
  currTime.textContent = `0s`;
  rollCount.textContent = `0`;
  setBestTime();
};

initialSetup();
