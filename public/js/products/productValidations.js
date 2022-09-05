window.onload = function(){

//------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO CREAR PRODUCTO -------//    
    let formProduct = document.querySelector('.createProductForm');
    formProduct.addEventListener('submit', (e) => {
        //debugger
        let errors = [];

        let nameProduct = document.querySelector('#nameProduct');
        let descriptionProduct = document.querySelector('#descriptionProduct');
        let priceProduct = document.querySelector('#priceProduct');
        let tamanoProduct = document.querySelector('#tamanoProduct');
        let discountProduct = document.querySelector('#discountProduct');
      

        if (nameProduct.value == '') {
            errors.push('El campo nombre no puede estar vacío');
            nameProduct.classList.add('is-invalid');
        } else {
            nameProduct.classList.add('is-valid');
            nameProduct.classList.remove('is-invalid');
            descriptionProduct.focus();
        };

        if (descriptionProduct.value == '') {
            errors.push('El campo descripción no puede estar vacío');
            descriptionProduct.classList.add('is-invalid');
        } else {
            descriptionProduct.classList.add('is-valid');
            descriptionProduct.classList.remove('is-invalid');
            priceProduct.focus();
        };

        if (descriptionProduct.value.length <20 ) {
            errors.push('El campo descripción no puede ser menor a 20 caracteres');
            descriptionProduct.classList.add('is-invalid');
        } else {
            descriptionProduct.classList.add('is-valid');
            descriptionProduct.classList.remove('is-invalid');
            priceProduct.focus();
        };

        if (priceProduct.value <= 0 ) {
             errors.push('El campo precio no puede ser menor a cero');
             priceProduct.classList.add('is-invalid');
         } else {
            priceProduct.classList.add('is-valid');
            priceProduct.classList.remove('is-invalid');
            tamanoProduct.focus();
         };
         if (tamanoProduct.value < 500 ) {
            errors.push('El campo tamaño no puede ser menor a 500');
            tamanoProduct.classList.add('is-invalid');
        } else {
            tamanoProduct.classList.add('is-valid');
            tamanoProduct.classList.remove('is-invalid');
            discountProduct.focus();
        };
        
        if (discountProduct.value <= 0 ) {
            errors.push('El campo Descuento no puede ser menor a cero');
            discountProduct.classList.add('is-invalid');
        } else {
            discountProduct.classList.add('is-valid');
            discountProduct.classList.remove('is-invalid');
           
        };


        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            form.submit();
        }

    });


}