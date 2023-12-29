import { getRandomIndex, getHtmlCode } from "./utils.js";

const minEmojieCount = 0;
const maxEmojiecount = 16;

export const getEmojieList = (length) => {
  try {
    validateLength(length);
    const randomEmojieList = getRandomEmojieList(length);
    return getDoubledEmojieList(randomEmojieList, 2 * length);
  } catch (e) {
    throw e;
  }
};

const validateLength = (length) => {
  if (!isLengthValid(length)) {
    throw new Error("Invalid length for emojies list.");
  }
};

const isLengthValid = (length) => {
  return length >= minEmojieCount && length <= maxEmojiecount;
};

const getRandomEmojieList = (length) => {
  const emojieList = [];
  const uniqueRandomIndices = getUniqueRandomIndices(
    length,
    minEmojieCount,
    maxEmojiecount
  );
  uniqueRandomIndices.map((index) => {
    const code = getEmojieCode(index);
    emojieList.push(code);
  });
  return emojieList;
};

const getEmojieCode = (index) => {
  return getHtmlCode(emojiies[index].html);
};

const getUniqueRandomIndices = (length, min, max) => {
  let randomIndices = [];
  while (!areAllIndicesUnique(randomIndices, length)) {
    const randomIndex = getRandomIndex(min, max);
    randomIndices.push(randomIndex);
  }
  return getUniqueIndices(randomIndices);
};

const areAllIndicesUnique = (indices, length) => {
  const indexSet = new Set(indices);
  return indexSet.size === length;
};

const getUniqueIndices = (indices) => {
  const indexSet = new Set(indices);
  return [...indexSet];
};

const getDuplicateIndices = (length) => {
  const halvedLength = length / 2;
  const duplicateIndices = [];
  getUniqueRandomIndices(length, minEmojieCount, maxEmojiecount).map(
    (index) => {
      duplicateIndices.push(index % halvedLength);
    }
  );
  return duplicateIndices;
};
console.log(getDuplicateIndices(16));

const getDoubledEmojieList = (randomEmojieList, length) => {
  let emojieList = [];
  getDuplicateIndices(length).map((index) => {
    emojieList.push(randomEmojieList[index]);
  });
  return emojieList;
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
