const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObj = {};
    
    formData.forEach((value, name) => {
        
        if (value.length === 0) {
            value = prompt(`Fill in the field "${name}", please`);
        }
        
        formDataObj[name] = value
    })
    console.log(formDataObj);
    refs.form.reset();
}