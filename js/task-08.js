const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const formData = event.currentTarget.elements;
    console.log(formData.name);
    const formDataObj = {
        email: "",
        password: ""
    };
    
    formData.forEach((element) => {
        
        if (element.email.value.length === 0 || element.password.value.length === 0) {
            return alert(`Fill in the all fields, please`);
        }
        
        formDataObj.email = element.email.value;
        formDataObj.password = element.password.value;
    })
    console.log(formDataObj);
    refs.form.reset();
}