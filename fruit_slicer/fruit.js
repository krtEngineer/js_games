import { getEmojieCode, getRandomValue } from "./utils.js";

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
