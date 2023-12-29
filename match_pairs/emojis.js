import { getRandomIndex, getHtmlCode } from "./utils.js";

const minEmojieCount = 1;
const maxEmojiecount = 16;
const randomizationCount = 300;

export const getEmojieList = (length) => {
  try {
    validateLength(length);
    const randomEmojieList = getRandomEmojieList(length);
    return getDoubledEmojieList(randomEmojieList, 2 * length);
  } catch (e) {
    throw e;
  }
};

const getDoubledEmojieList = (randomEmojieList, doubledLength) => {
  const emojieList = Array.from(getEmptyString(doubledLength));
  let attempts = randomizationCount;
  while (randomEmojieList.length > 0 && attempts > 0) {
    const emojieIndex = randomEmojieList.length - 1; //last index of emojie list
    const firstIndex = getRandomIndex(0, doubledLength / 2);
    const secondIndex = getRandomIndex(doubledLength / 2, doubledLength);
    if (emojieList[firstIndex] === " " && emojieList[secondIndex] === " ") {
      // set emojie at firstIndex and SecondIndex in emojie list
      emojieList[firstIndex] = randomEmojieList[emojieIndex];
      emojieList[secondIndex] = randomEmojieList[emojieIndex];
      // pop current emojie from random emojie list => reducing length by 1
      randomEmojieList.pop();
    }
    attempts--;
  }
  return emojieList;
};

const getEmptyString = (length) => {
  let emptyStr = "";
  for (let i = 0; i < length; i++) {
    emptyStr += " ";
  }
  return emptyStr;
};

const validateLength = (length) => {
  if (isLengthValid(length)) {
    throw new Error("Invalid length for emojies list.");
  }
};

const isLengthValid = () => {
  return length >= minEmojieCount && length <= maxEmojiecount;
};

const getRandomEmojieList = (length) => {
  const emojieList = [];
  for (let i = 0; i < length; i++) {
    emojieList.push(getRandomEmojieCode());
  }
  return emojieList;
};

const getRandomEmojieCode = () => {
  const randomIndex = getRandomIndex(minEmojieCount, maxEmojiecount);
  return getHtmlCode(emojis[randomIndex].html);
};

// total emojis = 16
// short emoji list
// add more emojies by web scrapping
// to download huge emojies use // emojies list source link: https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb

const emojiies = [
  {
    html: "&#127815;",
  },
  {
    html: "&#127816;",
  },
  { html: "&#127817;" },
  {
    html: "&#127818;",
  },
  {
    html: "&#129372;",
  },
  {
    html: "&#129362;",
  },
  {
    html: "&#127798;",
  },
  {
    html: "&#129365;",
  },
  {
    html: "&#129361;",
  },
  {
    html: "&#129367;",
  },
  {
    html: "&#127871;",
  },
  {
    html: "&#127846;",
  },
  {
    html: "&#127850;",
  },
  {
    html: "&#127856;",
  },
  {
    html: "&#127852;",
  },
  {
    html: "	&#9749;",
  },
];
