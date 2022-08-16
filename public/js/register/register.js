let form = document.getElementById("registration-form");
 form.addEventListener("submit", (event) => {
 
    let ulErrors = document.querySelector(".errors ul");
    ulErrors.innerHTML = "";
    let errors = [];


    const regexAlpha = /^[a-zA-Z ]{3,}$/
    const regexEmail  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPassword  = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/ ;
    const userEmail = event.target.email.value
    const userName = event.target.name.value
    const userLastName = event.target.lastname.value
    const userPassword = event.target.password.value
    const userConfirmPassword = event.target.userConfirmPassword.value
    
    if(!userName || !userLastName || !userEmail || !userPassword || !userConfirmPassword || !userAdmin ){
     errors.push("Debes llenar todos los campos")
    }

    if(userName && !regexAlpha.test(userName)){
        errors.push("El nombre debe tener minimo 3 caracteres y solo contener letras")  
    }

    if(userEmail && !regexEmail.test(userEmail)){
        errors.push("El correo electrónico debe contener un @ y .com")  
    }

    if(userPassword && !regexPassword.test(userPassword)){
        errors.push("La contraseña debe tener 6 caracteres y una mayúscula como mínimo.")  
    }

    if(userConfirmPassword && !regexPassword.test(userConfirmPassword) && userPassword == userConfirmPassword){
        errors.push("Las contraseñas deben coincidir.")  
    }

   if(errors.length > 0){
    event.preventDefault();
    let ulErrors = document.querySelector(".errors ul");
    errors.forEach(error => {
        ulErrors.innerHTML += `<li class="data-error">${error}</li>`
    })
}

})