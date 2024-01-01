import { getElement, getFormattedTime } from "./utils.js";

const timeElement = getElement("#timer");
const scoreElement = getElement("#score");
const bestScoreElement = getElement("#best-score");

export const setTimeElement = (time) => {
  timeElement.textContent = getFormattedTime(time);
};

export const setScoreElement = (score) => {
  scoreElement.textContent = `${score}`;
};

export const setBestScoreElement = (bestScore) => {
  bestScoreElement.textContent = `${bestScore}`;
};
