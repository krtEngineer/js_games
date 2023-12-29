import {
  validateLength,
  getUniqueRandomValues,
  getDuplicateRandomValues,
  getEmojieCode,
} from "./utils.js";
import { minEmojieCount, maxEmojiecount } from "./constant.js";

/**
 * @description method to get list of random emojies
 * @param {*} length length of emoji list
 * @returns array
 */
export const getEmojieList = (length) => {
  try {
    validateLength(length);
    const randomEmojieList = getRandomEmojieList(length);
    return getDoubledEmojieList(randomEmojieList);
  } catch (e) {
    throw e;
  }
};

/**
 * @description method to get list of random emojies
 * @param {*} length length of random emojies list
 * @returns array
 */
const getRandomEmojieList = (length) => {
  const emojieList = [];
  getUniqueRandomValues(length, minEmojieCount, maxEmojiecount).map((index) => {
    const code = getEmojieCode(index);
    emojieList.push(code);
  });
  return emojieList;
};

/**
 * @description method to duplicate emojies in random order
 * @param {*} randomEmojieList list of random emojies
 * @returns array
 */
const getDoubledEmojieList = (randomEmojieList) => {
  let emojieList = [];
  getDuplicateRandomValues(randomEmojieList.length * 2).map((index) => {
    emojieList.push(randomEmojieList[index]);
  });
  return emojieList;
};
