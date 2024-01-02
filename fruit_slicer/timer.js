import { setTime, getTime, isTimeValid } from "./game-variable.js";
import { reSetFruits } from "./fruit.js";
import { settleGame } from "./game.js";

const timer = {
  clockTimer: null,
  fruitReSetTimer: null,
  settleGameTimer: null,
  fruitCountTimer: null,
};

const clock = () => {
  let time = getTime();
  if (isTimeValid(time)) {
    setTime(--time);
  }
};

export const setClockTimer = (gap) => {
  timer.clockTimer = setInterval(clock, gap);
};

export const clearClocktimer = () => {
  clearInterval(timer.clockTimer);
};

export const setFruitResetTimer = (gap) => {
  timer.fruitReSetTimer = setInterval(reSetFruits, gap);
};

export const clearFruitResetTimer = () => {
  clearInterval(timer.fruitReSetTimer);
};

export const setSettleGameTimer = (gap) => {
  timer.settleGameTimer = setInterval(settleGame, gap);
};

export const clearSettleGameTimer = () => {
  clearInterval(timer.settleGameTimer);
};

export const setAllTimers = () => {
  setClockTimer(1000);
  setFruitResetTimer(100);
  setSettleGameTimer(500);
};

export const clearAllTimers = () => {
  clearClocktimer();
  clearFruitResetTimer();
  clearSettleGameTimer();
};
