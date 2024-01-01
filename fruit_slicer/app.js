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
const timerElement = document.querySelector("#timer");

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

/**
 * Start clock
 */
let time = 15;

const setTime = () => {
  if (time > 0) {
    console.log(time);
    timerElement.textContent = getFormattedTime();
    time--;
  }
};

const getFormattedTime = () => {
  if (time >= 10) {
    return `00:${time}`;
  } else if (time < 10 && time >= 0) {
    return `00:0${time}`;
  } else {
    return `00:00`;
  }
};

// const timer = setInterval(setTime, 1000);

const finishGame = () => {
  if (time === 0) {
    /**
     * set time time to 0
     * clear timer interval
     * clear game finish internal
     * set current score to 0
     * set best score
     * remove fruits from game container
     * set to intital screen
     */
    time = 0;
    score = 0;
    bestScore = 100;
    clearInterval(timer);
    clearInterval(gameFinishTimer);
    removeFruits();
    setTimeout(setInitialScreen, 1000);
  }
};

const setInitialScreen = () => {
  if (imgContainer.classList.contains("hide")) {
    imgContainer.classList.remove("hide");
  }
  if (gameDescription.classList.contains("hide")) {
    gameDescription.classList.remove("hide");
  }
  container.style.gridTemplateRows = "2rem 3px 1fr 4rem 2rem";
  if (!gameContainer.classList.contains("hide")) {
    gameContainer.classList.add("hide");
    addFruitItems();
  }
  if (!gameData.classList.contains("hide")) {
    gameData.classList.add("hide");
  }
  gameBtn.textContent = "new game";
};

const removeFruits = () => {
  fruitItems.forEach((fruitItem) => {
    fruitItem.innerHTML = "";
  });
};

let score = 0;
let bestScore = 0;
let gameFinishTimer;
let timer;

// const gameFinishTimer = setInterval(finishGame, 500);

gameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (gameBtn.textContent.toLowerCase() === "play again") {
    /**
     * add fruit items again
     * restart timer
     */
    time = 15;
    addFruitItems();
    timer = setInterval(setTime, 1000);
    gameFinishTimer = setInterval(finishGame, 500);
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
    time = 15;
    timer = setInterval(setTime, 1000);
    gameFinishTimer = setInterval(finishGame, 500);
  }
});
