import {
  rollCount,
  gameBtn,
  diceBlocks,
  time,
  bestTime,
  dices,
} from "./elements.js";

import { getRandomDiceFaceHtml } from "./utility.js";

/**
 * Some game variables with their initial value
 * currTime => current runnng time. 0
 * currBestTime => current best time. best time from local storage or 0 if nothing in local storage
 * currRollsCount => current rolls count. current rolls count. 0
 * areAllDiceSelected => current status of all dice selection. false
 * isDiceDivHidden => current visibility status of dices division. true
 * gameBtnContent => text content of game button. 'new game'
 */
let currTime;
let currBestTime;
let currRollsCount;
let areAllDiceSelected;
let isDiceDivHidden;
let gameBtnContent;
let areAllDiceSame;
let isGameFinished;
let isGameAtStart;
let totalDiceCount = 10;

const resetTimer = () => {
  currTime = 0;
  time.textContent = `${currTime}s`;
};

const updateBestTime = () => {
  currBestTime = +localStorage.getItem("bestTime");
  if (currBestTime === 1000000) {
    bestTime.textContent = `0s`;
  } else {
    bestTime.textContent = `${currBestTime}s`;
  }
};

const resetRollsCount = () => {
  currRollsCount = 0;
  rollCount.textContent = `0`;
};

const unSelectAllDices = () => {
  [...diceBlocks].map((diceBlock) => {
    if (diceBlock.classList.contains("dice-selected")) {
      diceBlock.classList.remove("dice-selected");
    }
  });
  areAllDiceSelected = false;
};

const hideDiceDiv = () => {
  if (!dices.classList.contains("hide")) {
    dices.classList.add("hide");
  }
  isDiceDivHidden = true;
};

const changeGameBtnContent = (newContent) => {
  gameBtnContent = newContent;
  gameBtn.textContent = gameBtnContent;
};

const setGameStartFlag = () => {
  isGameAtStart =
    currTime === 0 &&
    currBestTime === +localStorage.getItem("bestTime") &&
    currRollsCount === 0 &&
    areAllDiceSelected === false &&
    isDiceDivHidden === true &&
    gameBtnContent === "new game";
};

const getSameDiceCount = () => {
  let sameDiceCount = 0;
  if (
    diceBlocks[0].children[0] === null ||
    diceBlocks[0].children[0] === undefined
  ) {
    return sameDiceCount;
  }
  const firstDiceClass = diceBlocks[0].children[0].classList[1];
  [...diceBlocks].map((diceBlock) => {
    const diceClass = diceBlock.children[0].classList[1];
    sameDiceCount += diceClass === firstDiceClass;
  });
  return sameDiceCount;
};

const setSameDiceFlag = () => {
  const sameDiceCount = getSameDiceCount();
  if (sameDiceCount === totalDiceCount) {
    areAllDiceSame = true;
  } else {
    areAllDiceSame = false;
  }
};

const isDiceBlockSelected = (diceBlock) => {
  return diceBlock.classList.contains("dice-selected");
};

const getSelectedDicesCount = () => {
  let selectedDiceCount = 0;
  [...diceBlocks].map((diceBlock) => {
    selectedDiceCount += isDiceBlockSelected(diceBlock);
  });
  return selectedDiceCount;
};

const setSelectedDicesFlag = () => {
  const selectedDiceCount = getSelectedDicesCount();
  if (selectedDiceCount === totalDiceCount) {
    areAllDiceSelected = true;
  } else {
    areAllDiceSelected = false;
  }
};

const setGameFinishFlag = () => {
  setSameDiceFlag();
  setSelectedDicesFlag();
  isGameFinished = areAllDiceSelected && areAllDiceSame;
};

const initializeGame = () => {
  setBestTimeInStorage();
  resetTimer();
  updateBestTime();
  resetRollsCount();
  unSelectAllDices();
  hideDiceDiv();
  changeGameBtnContent("new game");
  setGameFinishFlag();
  setGameStartFlag();
};

/**
 * set timer to zero.
 * update best time.
 * set rolls count to zero.
 * unselect all dice blocks
 * hide dice-block division
 * change game button content to 'New Game'
 */
const isGameAtFinish = () => {
  setGameFinishFlag();
  if (isGameFinished) {
    clearInterval(gameFinishTimer);
    clearInterval(updateTimeTimer);
    initializeGame();
  }
};

const assignDiceFaces = () => {
  [...diceBlocks].map((diceBlock) => {
    if (!isDiceBlockSelected(diceBlock)) {
      diceBlock.innerHTML = getRandomDiceFaceHtml();
    }
  });
};

const increaseRollsCount = () => {
  let currRollsCount = +rollCount.textContent;
  currRollsCount++;
  rollCount.textContent = `${currRollsCount}`;
};

const showDiceDiv = () => {
  if (dices.classList.contains("hide")) {
    dices.classList.remove("hide");
  }
  isDiceDivHidden = false;
};

// game btn listener
gameBtn.addEventListener("click", () => {
  if (gameBtnContent === "roll") {
    assignDiceFaces();
    increaseRollsCount();
  } else if (gameBtnContent === "new game") {
    startGame();
  } else {
    throw new Error("Incorrect game button name");
  }
});

/**
 * Change color when selecting any dice
 */
[...diceBlocks].map((diceBlock) => {
  diceBlock.addEventListener("click", () => {
    diceBlock.classList.toggle("dice-selected");
  });
});

const updateTime = () => {
  currTime++;
  time.textContent = `${currTime}s`;
};

const storeBestTime = (newBestTime) => {
  localStorage.setItem("bestTime", newBestTime);
};

const setBestTimeInStorage = () => {
  let currBestTime = +localStorage.getItem("bestTime");
  if (currBestTime === 0) {
    storeBestTime(1000000);
  } else {
    if (currTime < currBestTime) {
      storeBestTime(currTime);
    }
  }
};

let gameFinishTimer;
let updateTimeTimer;

/**
 * if game is at initial point then start game
 */
const startGame = () => {
  if (isGameAtStart) {
    showDiceDiv();
    assignDiceFaces();
    changeGameBtnContent("roll");
    gameFinishTimer = setInterval(isGameAtFinish, 500);
    updateTimeTimer = setInterval(updateTime, 1000);
  }
};

initializeGame();
