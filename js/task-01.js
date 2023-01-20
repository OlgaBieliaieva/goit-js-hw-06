// ? Count the number of categories

const categoriesListRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesListRef.childElementCount}`);



// ?  Count the number of elements in each category

const categoriesTitlesRef = document.querySelectorAll('.item h2')
const categoriesItemsRef = document.querySelectorAll('.item ul')

console.log(`Category: ${categoriesTitlesRef[0].textContent}`);
console.log(`Elements: ${categoriesItemsRef[0].childElementCount}`);
console.log(`Category: ${categoriesTitlesRef[1].textContent}`);
console.log(`Elements: ${categoriesItemsRef[1].childElementCount}`);
console.log(`Category: ${categoriesTitlesRef[2].textContent}`);
console.log(`Elements: ${categoriesItemsRef[2].childElementCount}`);
