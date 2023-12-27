import { diceFace } from "./diceFaces.js";

export const getRandomDiceFaceHtml = () => {
  return diceFace[`${getRandomNumber()}`][`html`];
};

// Get random number between 1 to 6
const getRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};
