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

/**
 * @description method to validate result, if invalid throw error
 * @param {*} result result to be checked
 */
const validateResult = (result) => {
  if (!isResultValid(result)) {
    throw new Error(`Invalid element for name: ${name}`);
  }
};

/**
 * @description method to get element in document with name (class, id, etc.)
 * @param {*} name name of the element
 * @returns
 */
export const getElement = (name) => {
  try {
    let result = document.querySelector(name);
    validateResult(result);
    return result;
  } catch (e) {
    throw e;
  }
};

/**
 * @description method to get all elements in document with same name (class, id, etc.)
 * @param {*} commonName common name for elements
 * @returns array
 */
export const getElementList = (commonName) => {
  try {
    let result = document.querySelectorAll(commonName);
    validateResult(result);
    return result;
  } catch (e) {
    throw e;
  }
};

/**
 * @description method to check if result is valid i.e. not null and not undefined and not NaN
 * @param {*} result
 * @returns
 */
export const isResultValid = (result) => {
  return result !== null && result !== undefined && result !== NaN;
};

export const getFormattedTime = (time) => {
  if (time >= 10) {
    return `00:${time}`;
  } else if (time < 10 && time >= 0) {
    return `00:0${time}`;
  } else {
    return `00:00`;
  }
};
