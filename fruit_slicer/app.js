const fruitEmojies = document.querySelectorAll("#fruit-emoji");

console.log(fruitEmojies);

fruitEmojies.forEach((fruitItem) => {
  fruitItem.addEventListener("click", (e) => {
    let target = e.target;
    let parent = target.parentNode;
    let grandParent = parent.parentNode;
    if (
      parent.classList.contains("fruit") &&
      parent.classList.contains("drop-fruit")
    ) {
      grandParent.innerHTML = ``;
    }
  });
});
