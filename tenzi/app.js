/**
 * Increase roll count on clicking roll button
 */
const rollCount = document.querySelector("#roll-count");
// Intitial rolls count is zero
rollCount.textContent = `0`;

const gameBtn = document.querySelector(".game-btn");
const increaseRollsCount = () => {
  console.log(`Incrementing count`);
  let currRollsCount = +rollCount.textContent;
  currRollsCount++;
  rollCount.textContent = `${currRollsCount}`;
};
gameBtn.addEventListener("click", increaseRollsCount);
