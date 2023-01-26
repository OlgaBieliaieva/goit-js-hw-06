const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();
    
    const formDataObj = {};
        
    [...event.currentTarget.elements].forEach(({name, value}) => {
        if (name.length > 0) {
            value.length > 0 ? formDataObj[name] = value : alert(`Fill in all fields, please`)
        }                    
    })
    
   console.log(formDataObj);
    
    form.reset();
}