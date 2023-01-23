// ? Count the number of categories

const categoriesListRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesListRef.childElementCount}`);



// ?  Count the number of elements in each category


const categoriesItemsRef = document.querySelectorAll('.item')

const showCategories = categoriesItemsRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
})


