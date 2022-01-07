const regex = () => {
    const inputsCalc = document.querySelectorAll('.calc-item');

    const inputName = document.querySelectorAll('.form-name');
    const inputPhone = document.querySelectorAll('.form-phone');
    const inputEmail = document.querySelectorAll('.form-email');

    const inputNameBottom = document.querySelector('#form2-name');
    const inputMessageBottom = document.querySelector('#form2-message');

     function customTrim(val) {
         val = val.replace(/\s+/g, " "); //много пробелов в один
         val = val.replace(/-+/g, '-'); //много дефисов в один
         val = val.replace(/\(+/g, '('); //много скобок в один
         val = val.replace(/\)+/g, ')'); //много скобок в один
         val = val.replace(/^[ |\-+]/g, ''); //удаление дефисов и пробелов в начале
         val = val.replace(/[ |\-+]$/g, ''); //удаление дефисов и пробелов в конце
         return val;
     }

    inputsCalc.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d.]/g, '');
        });
    });

    inputName.forEach((input) => {
        input.addEventListener('blur', (e) => {
            let val = e.target.value;
            val = val.replace(/[^а-яё \-]$/ig, '');
            val = customTrim(val);
            val = val.replace(/( |^)[ а-яё]/g, u => u.toUpperCase());
            e.target.value = val;
        });
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^а-яё \-}]$/ig, '');
        });
    });

    inputEmail.forEach((input) => {
        input.addEventListener('blur', (e) => {
            let val = e.target.value;
            val = val.replace(/[^dA-Za-z-@!.*~'\d]/g, '');
            val = customTrim(val);
            e.target.value = '';
            e.target.value = val;
        });
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^A-Za-z-@!.*~'\d]/g, '');
        });
    });


    inputPhone.forEach((input) => {
        input.addEventListener('blur', (e) => {
            let val = e.target.value;
            val = val.replace(/[^\d-)(]/g, '');
            val = customTrim(val);
            e.target.value = '';
            e.target.value = val;
        });
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d-)(]/g, '');
        });
    });

    inputNameBottom.addEventListener('blur', (e) => {
        let val = e.target.value;
        val = val.replace(/[^а-яё \-]/ig, '');
        val = customTrim(val);
        val = val.replace(/( |^)[ а-яё]/g, u => u.toUpperCase());
        e.target.value = val;
    });

    inputNameBottom.addEventListener('input', () => {
        inputNameBottom.value = inputNameBottom.value.replace(/[^а-яё \-]/ig, '');
    });

    inputMessageBottom.addEventListener('blur', (e) => {
        let val = e.target.value;
        val = val.replace(/[^а-яё \-]/ig, '');
        val = customTrim(val);
        e.target.value = '';
        e.target.value = val;
    });
   inputMessageBottom.addEventListener('input', () => {
       inputMessageBottom.value =inputMessageBottom.value.replace(/[^а-яё \-]/ig, '');
    });

};

export default regex;