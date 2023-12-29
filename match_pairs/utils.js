import { minEmojieCount, maxEmojiecount, emojiies } from "./constant.js";

/**
 * @description method to validate length
 * @param {*} length
 * @returns void
 */
export const validateLength = (length) => {
  if (!isLengthValid(length)) {
    throw new Error("Invalid length for emojies list.");
  }
};

/**
 * @description method to check if length is in specified range
 * @param {*} length
 * @returns boolean
 */
const isLengthValid = (length) => {
  return length >= minEmojieCount && length <= maxEmojiecount;
};

/**
 * @description method to get unique random values
 * @param {*} length
 * @param {*} min bottom limit for random value
 * @param {*} max top limit for random value, excluded
 * @returns array
 */
export const getUniqueRandomValues = (length, min, max) => {
  let randomValues = [];
  while (randomValues.length < length) {
    const randomIndex = getRandomValue(min, max);
    randomValues.push(randomIndex);
    randomValues = getUniqueValues(randomValues);
  }
  return randomValues;
};

/**
 * @description method to get unique elements of any array
 * @param {*} arr
 * @returns array
 */
const getUniqueValues = (arr) => {
  return [...getArraySet(arr)];
};

/**
 * @description method to get set from array values
 * @param {*} arr array to be converted to set
 * @returns set
 */
const getArraySet = (arr) => {
  return new Set(arr);
};

/**
 * @description method to get list where each element is random and repeated twice
 * @param {*} length length of result array
 * @returns array
 */
export const getDuplicateRandomValues = (length) => {
  const halvedLength = length / 2;
  const duplicateValues = [];
  getUniqueRandomValues(length, minEmojieCount, maxEmojiecount).map((index) => {
    duplicateValues.push(index % halvedLength);
  });
  return duplicateValues;
};

/**
 * @description method to get html code for emoji from emojies list
 * @param {*} index index of emoji object
 * @returns string
 */
export const getEmojieCode = (index) => {
  return emojiies[index].html;
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
 * @description method to get all elements in document with same name (class, id, etc.)
 * @param {*} commonName common name for elements
 * @returns array
 */
export const getElementList = (commonName) => {
  try {
    let result = document.querySelectorAll(commonName);
    return validatedResult(result);
  } catch (e) {
    throw e;
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
 * @description method to validate result, if invalid throw error
 * @param {*} result result to be checked
 */
const validateResult = (result) => {
  if (!isResultValid(result)) {
    throw new Error(`Invalid element for name: ${name}`);
  }
};

/**
 * @description method to check if result is valid i.e. not null and not undefined and not NaN
 * @param {*} result
 * @returns
 */
const isResultValid = (result) => {
  return result !== null && result !== undefined && result !== NaN;
};
