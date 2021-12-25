const regex = () => {
    const inputsCalc = document.querySelectorAll('.calc-item');

    const inputName = document.querySelectorAll('.form-name');
    const inputPhone = document.querySelectorAll('.form-phone');
    const inputEmail = document.querySelectorAll('.form-email');

    const inputNameBottom = document.querySelector('#form2-name');
    const inputMessageBottom = document.querySelector('#form2-message');


     function customTrim(val) {
         val = val.replace(/\s+/g, " ");
         val = val.replace(/-+/g, '-');
         val = val.replace(/^[ |\-+]/g, '');
         val = val.replace(/[ |\-+]$/g, '');
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
            val = val.replace(/[^а-яё \-]/ig, '');
            val = customTrim(val);
            val = val.replace(/( |^)[ а-яё]/g, u => u.toUpperCase());
            e.target.value = val;
        });
    });

    inputEmail.forEach((input) => {
        input.addEventListener('blur', (e) => {
            let val = e.target.value;
            val = val.replace(/[^A-Za-z-@!.*~']/g, '');
            val = customTrim(val);
            e.target.value = '';
            e.target.value = val;
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
    });

    inputNameBottom.addEventListener('blur', (e) => {
        let val = e.target.value;
        val = val.replace(/[^а-яё \-]/ig, '');
        val = customTrim(val);
        val = val.replace(/( |^)[ а-яё]/g, u => u.toUpperCase());
        e.target.value = val;
    });

    inputMessageBottom.addEventListener('blur', (e) => {
        let val = e.target.value;
        val = val.replace(/[^а-яё \-]/ig, '');
        val = customTrim(val);
        e.target.value = '';
        e.target.value = val;
    });

};

export default regex;