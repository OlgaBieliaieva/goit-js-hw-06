
const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    event.currentTarget.value.length === Number(inputRef.dataset.length) ? inputRef.classList.add("valid") : inputRef.classList.add("invalid")
}
