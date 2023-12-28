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

const getClassStr = (isSelected) => {
  if (isSelected) {
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
