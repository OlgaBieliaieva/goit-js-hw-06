const counter = {
    value: 0,
    decrement() {
        this.value -= 1
    },
    increment() {
        this.value += 1
    },
}

const makeDecrement = () => {
    counter.decrement();
    refs.counter.textContent = counter.value
}

const makeIncrement = () => {
    counter.increment();
    refs.counter.textContent = counter.value
}

const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector('#value')
}

refs.decrementBtn.addEventListener('click', makeDecrement);
refs.incrementBtn.addEventListener('click', makeIncrement);