export const getFruitHTML = (isDropppable = true, fruitEmoji = "&#127824;") => {
  const dropClass = isDropppable ? "drop-fruit" : "";
  return `<div class="fruit ${dropClass}">
              <span id="fruit-emoji">${fruitEmoji}</span>
            </div>`;
};
