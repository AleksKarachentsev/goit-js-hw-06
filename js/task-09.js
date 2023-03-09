const changeColorBtn = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const changeColorText = document.querySelector(`.color`);
console.log(bodyEl);

changeColorBtn.addEventListener(`click`, () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  changeColorText.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
