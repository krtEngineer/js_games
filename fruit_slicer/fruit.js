import {
  getEmojieCode,
  getRandomValue,
  getElementList,
  getSlotCount,
  getUniqueRandomValues,
  getElement,
} from "./utils.js";
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
    if (isFruitItemShown(fruitItem)) {
      setFruitItem(fruitItem);
    }
  });
};

const setFruitItem = (fruitItem) => {
  fruitItem.innerHTML = getFruitHTML();
  setCurrFruitCount(getCalculatedFruitCount(getCurrFruitCount()));
  getFruitEmoji(fruitItem).addEventListener("click", (e) => {
    fruitEmojiListener(e);
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

export const setFruits = () => {
  if (isTimeValid(getTime())) {
    reSetFruitRow();
    setFruitRow();
    // if (!allFruitSliced()) {
    //   setCurrFruitCount(0);
    // }
    addFruitItems();
  }
};

export const reSetFruits = () => {
  if (allFruitSliced()) {
    setFruits();
  }
};

const allFruitSliced = () => {
  return getCurrFruitCount() === 0;
};

export const setFruitRow = () => {
  const fruitRow = getElement(".fruit-row");
  const slots = getFruitSlots(getTime());
  setFruitItems(fruitRow, slots);
};

export const reSetFruitRow = () => {
  const fruitRow = getElement(".fruit-row");
  [...fruitRow.children].forEach((fruitItem) => {
    showFruitItem(fruitItem);
    fruitItem.innerHTML = ``;
  });
};

const setFruitItems = (fruitRow, slots) => {
  let index = 0;
  slots.forEach((slot) => {
    if (isFruitSlotEmpty(slot)) {
      hideFruitItem(fruitRow.children[index]);
    } else if (!isFruitSlotEmpty(slot)) {
      showFruitItem(fruitRow.children[index]);
    } else {
      throw new Error(`Invalid slot. Slot: ${slot}`);
    }
    index++;
  });
};

/**
 * get random combination of 1s and 0s in six digits
 */
export const getFruitSlots = (time) => {
  let slots = [0, 0, 0, 0, 0, 0];
  let count = getSlotCount(time);
  let randomNums = getUniqueRandomValues(count, 0, 6);
  for (let i = 0; i < count; i++) {
    slots[randomNums[i]] = 1;
  }
  return slots;
};

const isFruitSlotEmpty = (slot) => {
  return slot === 0;
};

const hideFruitItem = (fruitItem) => {
  if (isFruitItemShown(fruitItem)) {
    fruitItem.classList.add("hide");
  }
};

const showFruitItem = (fruitItem) => {
  if (!isFruitItemShown(fruitItem)) {
    fruitItem.classList.remove("hide");
  }
};

const isFruitItemShown = (fruitItem) => {
  return !fruitItem.classList.contains("hide");
};
