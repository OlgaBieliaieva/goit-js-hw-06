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
            value = alert(`Fill in all fields, please`);
        }
        
        formDataObj[name] = value
    })
    console.log(formDataObj);
    refs.form.reset();
}