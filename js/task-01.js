// ? Count the number of categories

const categoriesListRef = document.querySelector('#categories');
const showCategoriesCount = categoriesList => {
    console.log(`Number of categories: ${categoriesList.childElementCount}`);
}
showCategoriesCount(categoriesListRef)



// ?  Count the number of elements in each category


const categoriesItemsRef = document.querySelectorAll('.item')

const showCategories = categoriesItemsRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
})

showCategories()
