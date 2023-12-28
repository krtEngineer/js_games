export const getBlockContentStruct = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("block-content");
  newDiv.innerHTML = `&#10044;`;
  return newDiv;
};
