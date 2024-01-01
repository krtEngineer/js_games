import {
  setTimeElement,
  setScoreElement,
  setBestScoreElement,
} from "./doc-element.js";
import { maximumTime } from "./constant.js";

/**
 * game variables
 * 1. time
 * 2. score
 * 3. best score
 */

const gameVariables = {
  time: maximumTime,
  score: 0,
  bestScore: 0,
  currFruitCount: null,
};

export const setTime = (time) => {
  gameVariables.time = time;
  setTimeElement(time);
};
export const setScore = (score) => {
  gameVariables.score = score;
  setScoreElement(score);
};
export const setBestScore = (bestScore) => {
  gameVariables.bestScore = bestScore;
  setBestScoreElement(bestScore);
};
export const setCurrFruitCount = (currFruitCount) => {
  console.log(currFruitCount);
  gameVariables.currFruitCount = currFruitCount;
};

export const getTime = () => {
  return gameVariables.time;
};
export const getScore = () => {
  return gameVariables.score;
};
export const getBestScore = () => {
  return gameVariables.bestScore;
};
export const getCurrFruitCount = () => {
  return gameVariables.currFruitCount;
};

export const isTimeValid = (time) => {
  return time > 0;
};

export const setCalculatedBestScore = () => {
  let score = getScore();
  let bestScore = getCalculatedBestScore(score);
  setBestScore(bestScore);
};

export const getCalculatedBestScore = (score) => {
  let bestScore = localStorage.getItem("bestScore");
  if (score >= bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
  }
  return bestScore;
};

export const getCalculatedFruitCount = (currFruitCount) => {
  return ++currFruitCount;
};
