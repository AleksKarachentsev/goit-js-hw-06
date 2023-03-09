let counterValue = 0;
const step = 1;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', onDecrementButtonEl);
counterEl.lastElementChild.addEventListener('click', onIncrementButtonEl);

function onDecrementButtonEl() {
  counterValue -= step;
  valueEl.textContent = counterValue;
  console.log(`Click on decrement button`);
}

function onIncrementButtonEl() {
  counterValue += step;
  valueEl.textContent = counterValue;
  console.log(`Click on increment button`);
}
