/**
 * Incrementing roll count on clicking roll button
 */
const rollCount = document.querySelector("#roll-count");
// Intitial rolls count is zero
rollCount.textContent = `0`;

const gameBtn = document.querySelector(".game-btn");
const increaseRollsCount = () => {
  console.log(`Incrementing count`);
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

// Action on clicking game button
gameBtn.addEventListener("click", () => {
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
    return correctDiceCount === 10;
  });
};

const gameStatusCheck = () => {
  if (hasGameFinished()) {
    clearInterval(gameStatusCoutdown);
  }
};

let gameStatusCoutdown = setInterval(gameStatusCheck, 500);

gameStatusCheck();
