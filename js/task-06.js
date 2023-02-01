
const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    inputRef.classList.remove("valid", "invalid");
    event.currentTarget.value.length === Number(inputRef.dataset.length) ? inputRef.classList.add("valid") : inputRef.classList.add("invalid");     
}
