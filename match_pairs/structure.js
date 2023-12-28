export const getBlockStruct = (content = `&#10044;`) => {
  // const newDiv = document.createElement("div");
  // newDiv.classList.add("block-content");

  let blocksInnerHTML = "";
  for (let i = 0; i < 16; i++) {
    blocksInnerHTML += `
    <div class="block"> 
    <div class="block-content">
        ${content}
    </div></div>`;
  }
  return blocksInnerHTML;
};
