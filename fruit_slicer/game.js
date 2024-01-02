import { getTime } from "./game-variable.js";
import { setAllTimers, clearAllTimers } from "./timer.js";
import {
  setInitialView,
  setGameView,
  setGameDataContent,
} from "./game-view.js";
import { setFruits } from "./fruit.js";

const isGameFinished = () => {
  return getTime() === 0;
};

export const settleGame = () => {
  if (isGameFinished()) {
    setTimeout(() => {
      clearAllTimers();
      setInitialView();
    }, 1000);
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
  setFruits();
};
