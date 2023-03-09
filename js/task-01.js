//
//number of categories
const ulEl = document.querySelector('#categories');
console.log(`Number of categories: ${ulEl.children.length}`);

const listEl = ulEl.children;

[...listEl].forEach(function (element, index) {
  console.log(`Catigories: ${element.firstElementChild.textContent}`);
  console.log(`Elements:: ${element.lastElementChild.children.length}`);
});
