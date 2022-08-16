let form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    let ulErrors = document.querySelector(".errors ul");
    ulErrors.innerHTML = "";
    let errors = [];
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = event.target.email.value
    const password = event.target.password.value;
    if(!email || !password) {
        errors.push("Debes llenar todos los campos")
        
    }

    if(email && !regexEmail.test(email)){
        errors.push("Debes escribir un email válido LOGIN")
        
    }

    if(errors.length > 0){
        event.preventDefault();
        let ulErrors = document.querySelector(".errors ul");
        errors.forEach(error => {
            ulErrors.innerHTML += `<li class="data-error">${error}</li>`
        })
    }
   
})
