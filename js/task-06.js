const inputEl = document.querySelector(`#validation-input`);

const dataLength = Number(inputEl.getAttribute(`data-length`));
//console.log(dataLength);

const onInputValidation = event => {
  if (event.target.value.length === dataLength) {
    inputEl.classList.add(`valid`);
    inputEl.classList.remove(`invalid`);
  } else if (event.target.value.length === 0) {
    inputEl.classList.remove(`valid`);
    inputEl.classList.remove(`invalid`);
  } else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  }
};

inputEl.addEventListener(`blur`, onInputValidation);
