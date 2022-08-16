let form = document.getElementById("registration-form");
 form.addEventListener("submit", (event) => {
    // event.preventDefault();

 
    let ulErrors = document.querySelector(".errors ul");
    ulErrors.innerHTML = "";
    let errors = [];


    ///// primero validaciones de vacio


    ////luego validaciones de expresiones regulares
    const userEmail = event.target.email.value
   // console.log(userEmail)
   if(!userEmail){
    errors.push("Debes escribir un email válido REGISTER")
   }

   if(errors.length > 0){
    event.preventDefault();
    let ulErrors = document.querySelector(".errors ul");
    errors.forEach(error => {
        ulErrors.innerHTML += `<li class="data-error">${error}</li>`
    })
}

})


    

//     const userEmail = event.target.email.value

//     if(!userEmail){
//         errors.push("PONE UN EMAIL RESGISTER")

//     }


//     if(errors.length > 0){
//         event.preventDefault();
//         let ulErrors = document.querySelector(".errors ul");
//         errors.forEach(error => {
//             ulErrors.innerHTML += `<li class="data-error">${error}</li>`
//         })
//     }
   
// })

//    // const userName = event.target.name.value
//    // const userLastName = event.target.lastname.value
//   //  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//     //const password = event.target.password.value;
//    // const confirmPassword = event.target.confirmPassword.value;
//    // const userAdmin = event.target.admin.value;
//    // const userAvatar = event.target.avatar.value;
    
//     // if(!userName || !userLastName || !userEmail || !password || !!confirmPassword || !userAdmin || !userAvatar) {
//     //     errors.push("Debes llenar todos los campos RESGISTER")
        
//     // }
    
    

//     // if(userEmail && !regexEmail.test(userEmail)){
//     //     errors.push("Debes escribir un email válido REGISTER")
        
//     // }














// // window.onload = function(){

// //     //------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO CREAR USUARIO -------//    
// //         let formUser = document.querySelector('.form-login-register');
// //         formProduct.addEventListener('submit', (e) => {
// //             //debugger
// //             let errors = [];
    
// //             let userName = document.querySelector('#userName"');
// //             let lastName = document.querySelector('#userLastName');
// //             let userEmail = document.querySelector('#userEmail');
// //             let userAvatar = document.querySelector('#userAvatar');
// //             let userPassword = document.querySelector('#userPassword');
// //             let userConfirmPassword = document.querySelector('#userConfirmPassword');
// //             let userAdmin = document.querySelector('#userAdmin');

          
    
// //             if (userName.value == '') {
// //                 errors.push('El campo nombre no puede estar vacío');
// //                 userName.classList.add('is-invalid');
// //             } else {
// //                 userName.classList.add('is-valid');
// //                 userName.classList.remove('is-invalid');
// //                 lastName.focus();
// //             };
    
// //             if (lastName.value == '') {
// //                 errors.push('El campo Apellido no puede estar vacío');
// //                 lastName.classList.add('is-invalid');
// //             } else {
// //                 lastName.classList.add('is-valid');
// //                 lastName.classList.remove('is-invalid');
// //                 userEmail.focus();
// //             };
    
// //             if (userEmail.value == '%@%.com%' ) {
// //                 errors.push('El email debe tener formato con @ y .com ');
// //                 userEmail.classList.add('is-invalid');
// //             } else {
// //                 userEmail.classList.add('is-valid');
// //                 userEmail.classList.remove('is-invalid');
// //                 userAvatar.focus();
// //             };
    
// //             if (userAvatar.value == 1 ) {
// //                  errors.push('Debe elegir una imagen de perfìl');
// //                  userAvatar.classList.add('is-invalid');
// //              } else {
// //                 userAvatar.classList.add('is-valid');
// //                 userAvatar.classList.remove('is-invalid');
// //                 userPassword.focus();
// //              };
// //              if (userPassword.value.length < 6 ) {
// //                 errors.push('El campo contraseña debe tener minimo 6 letras.');
// //                 userPassword.classList.add('is-invalid');
// //             } else {
// //                 userPassword.classList.add('is-valid');
// //                 userPassword.classList.remove('is-invalid');
// //                 userConfirmPassword.focus();
// //             };
            
// //             if (userConfirmPassword.value ==  userPassword) {
// //                 errors.push('Las contraseñas deben coincidir');
// //                 userConfirmPassword.classList.add('is-invalid');
// //             } else {
// //                 userConfirmPassword.classList.add('is-valid');
// //                 userConfirmPassword.classList.remove('is-invalid');
// //                 userAdmin.focus();
// //             };
// //             if (userAdmin.value != 0 || userAdmin.value != 1 ) {
// //                 errors.push('Debe elegir una opcion');
// //                 userAdmin.classList.add('is-invalid');
// //             } else {
// //                 userAdmin.classList.add('is-valid');
// //                 userAdmin.classList.remove('is-invalid');
// //             };
    
    
// //             //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario
    
// //             if (errors.length > 0) {
// //                 e.preventDefault();
// //                 let ulErrors = document.querySelector('.errores');
// //                 ulErrors.classList.add('alert-warning');
// //                 ulErrors.innerHTML = '';
// //                 for (let i = 0; i < errors.length; i++) {
// //                     ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
// //                 };
// //             }else{
// //                 alert('La validación fué exitosa')
// //                 form.submit();
// //             }
    
// //         });
    
    
// //     }