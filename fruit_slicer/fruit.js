import { getEmojieCode, getRandomValue, getElementList } from "./utils.js";
import {
  setScore,
  setCurrFruitCount,
  getCurrFruitCount,
  getScore,
  isTimeValid,
  getTime,
  getCalculatedFruitCount,
} from "./game-variable.js";

export const getFruitHTML = (isDropppable = true, fruitEmoji = "&#127824;") => {
  const dropClass = isDropppable ? "drop-fruit" : "";
  return `<div class="fruit ${dropClass}">
              <span id="fruit-emoji">${getRandomFruitEmoji()}</span>
            </div>`;
};

const getRandomFruitEmoji = () => {
  let randomIndex = getRandomValue(0, 17);
  return getEmojieCode(randomIndex);
};

export const addFruitItems = () => {
  getElementList(".fruit-item").forEach((fruitItem) => {
    fruitItem.innerHTML = getFruitHTML();
    setCurrFruitCount(getCalculatedFruitCount(getCurrFruitCount()));
    getFruitEmoji(fruitItem).addEventListener("click", (e) => {
      fruitEmojiListener(e);
    });
  });
};

const fruitEmojiListener = (e) => {
  let currFruitCount = getCurrFruitCount();
  let score = getScore();
  let fruit = getFruit(e);
  let fruitItem = getFruitItem(e);
  if (isFruitValid(fruit)) {
    fruitItem.innerHTML = ``;
    setCurrFruitCount(--currFruitCount);
    setScore(++score);
  }
};

const isFruitValid = (fruit) => {
  return fruit.classList.contains("fruit") && isFruitDropping(fruit);
};

const isFruitDropping = (fruit) => {
  return fruit.classList.contains("drop-fruit");
};

const getFruitEmoji = (fruitItem) => {
  return fruitItem.children[0].children[0];
};

const getFruitItem = (e) => {
  return getFruit(e).parentNode;
};

const getFruit = (event) => {
  return event.target.parentNode;
};

export const removeFruits = () => {
  getElementList(".fruit-item").forEach((fruitItem) => {
    fruitItem.innerHTML = "";
  });
  setCurrFruitCount(0);
};

export const reSetFruits = () => {
  if (isTimeValid(getTime()) && allFruitSliced()) {
    addFruitItems();
  }
};

const allFruitSliced = () => {
  return getCurrFruitCount() === 0;
};
