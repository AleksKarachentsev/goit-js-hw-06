const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

const onInputChange = () => {
  inputNameEl.value === ''
    ? (outputNameEl.textContent = 'Anonymous')
    : (outputNameEl.textContent = inputNameEl.value);
};

inputNameEl.addEventListener('input', onInputChange);
