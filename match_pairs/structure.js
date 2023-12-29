export const getBlocksStruct = (content = `&#10044;`) => {
  let blocksInnerHTML = "";
  for (let i = 0; i < 16; i++) {
    blocksInnerHTML += `
    <div class="block"> 
    ${getBlockStruct(content, i, false)}
    </div>`;
  }
  return blocksInnerHTML;
};

export const defaultEmojiContent = `&#10044;`;

export const getBlockStruct = (content, index, isSelected) => {
  let dataContent = getDataContent(isSelected, content);
  let classString = getClassStr(isSelected);
  return `<div class="${classString}" 
  data-id=${index} 
  data-content=${dataContent}>
  ${content}
  </div>`;
};

const getClassStr = (isLocked = false, isSelected) => {
  /**
   * Priority of locked block is high.
   * If block is locked then no need to check if it is selected or not
   */
  if (isLocked) {
    return `block-content locked`;
  } else if (isSelected) {
    return `block-content selected`;
  } else {
    return `block-content`;
  }
};

const getDataContent = (isSelected, content) => {
  let dataContent = "";
  if (isSelected) {
    dataContent = `*${content}*`;
  } else {
    dataContent = "default";
  }
  return dataContent;
};
