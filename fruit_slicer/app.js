import { getFruitHTML } from "./fruit.js";

const fruitEmojies = document.querySelectorAll("#fruit-emoji");

console.log(fruitEmojies);

fruitEmojies.forEach((fruitEmoji) => {
  fruitEmoji.addEventListener("click", (e) => {
    let target = e.target;
    let parent = target.parentNode;
    let grandParent = parent.parentNode;
    if (
      parent.classList.contains("fruit") &&
      parent.classList.contains("drop-fruit")
    ) {
      grandParent.innerHTML = ``;
    }
  });
});

/**
 * setting initial view
 */
const gameBtn = document.querySelector(".game-btn");
const container = document.querySelector(".container");
const gameData = document.querySelector(".game-data");
const gameContainer = document.querySelector(".game-container");
const imgContainer = document.querySelector(".img-container");
const gameDescription = document.querySelector(".game-desc");
const fruitItems = document.querySelectorAll(".fruit-item");

gameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (gameBtn.textContent.toLowerCase() === "play again") {
    addFruitItems();
  } else {
    /**
     * hide image container
     * show game data
     * show game-container
     * change style for container
     */
    if (!imgContainer.classList.contains("hide")) {
      imgContainer.classList.add("hide");
    }
    if (!gameDescription.classList.contains("hide")) {
      gameDescription.classList.add("hide");
    }
    container.style.gridTemplateRows = "2rem 3px 3rem 1fr 2rem";
    if (gameContainer.classList.contains("hide")) {
      gameContainer.classList.remove("hide");
      addFruitItems();
    }
    if (gameData.classList.contains("hide")) {
      gameData.classList.remove("hide");
    }
    gameBtn.textContent = "play again";
  }
});

const addFruitItems = () => {
  fruitItems.forEach((fruitItem) => {
    fruitItem.innerHTML = getFruitHTML();
    let fruitEmoji = fruitItem.children[0].children[0];
    fruitEmoji.addEventListener("click", (e) => {
      let target = e.target;
      let parent = target.parentNode;
      let grandParent = parent.parentNode;
      if (
        parent.classList.contains("fruit") &&
        parent.classList.contains("drop-fruit")
      ) {
        grandParent.innerHTML = ``;
      }
    });
  });
};
