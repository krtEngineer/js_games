export const getHtmlCode = (htmlCodes) => {
  return `${htmlCodes.split(";")[0]};`;
};

// random number between [min, max)
export const getRandomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getElementList = (commonName) => {
  try {
    let result = document.querySelectorAll(commonName);
    return validatedResult(result);
  } catch (e) {
    throw e;
  }
};

export const getElement = (name) => {
  try {
    let result = document.querySelector(name);
    return validatedResult(result);
  } catch (e) {
    throw e;
  }
};

const validatedResult = (result) => {
  if (isResultValid(result)) {
    return result;
  } else {
    throw new Error(`Invalid element for name: ${name}`);
  }
};

const isResultValid = (result) => {
  return result !== null && result !== undefined && result !== NaN;
};
