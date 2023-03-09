const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const setListEl = ingredients.map(options => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = options;
  return listEl;
});

console.log(setListEl);

const ulIngredientsEl = document.querySelector('#ingredients');
ulIngredientsEl.append(...setListEl);
