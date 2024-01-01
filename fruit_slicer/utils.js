import { emojies } from "./constant.js";

/**
 * @description method to get html code for emoji from emojies list
 * @param {*} index index of emoji object
 * @returns string
 */
export const getEmojieCode = (index) => {
  return emojies[index].html;
};

/**
 * @description method to get random value between min and max
 * @param {*} min minimum random value
 * @param {*} max maximum random value, excluded
 * @returns number
 */
export const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
