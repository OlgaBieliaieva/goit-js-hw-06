function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  divList: document.querySelector('#boxes')
}

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  
  const boxArray = Array.from(Array(Number(amount)));

  // const element = createElements('div');
  // element.style.width = '30px'
  // element.style.height = '30px'



  console.log(boxArray);
  
}
console.log(refs.input);
console.log(refs.createBtn);
console.log(refs.destroyBtn);

