import { getTime } from "./game-variable.js";
import { setAllTimers, clearAllTimers } from "./timer.js";
import {
  setInitialView,
  setGameView,
  setGameDataContent,
} from "./game-view.js";
import { addFruitItems } from "./fruit.js";

const isGameFinished = () => {
  return getTime() === 0;
};

export const settleGame = () => {
  if (isGameFinished()) {
    clearAllTimers();
    setInitialView();
  }
};

export const startGame = () => {
  setGameView();
  setAllTimers();
};

export const reStartGame = () => {
  clearAllTimers();
  setGameDataContent();
  setAllTimers();
  addFruitItems();
};
