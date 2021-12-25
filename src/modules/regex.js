const regex = () => {
    const inputsCalc = document.querySelectorAll('.calc-item');

    const inputName = document.querySelectorAll('.form-name');
    const inputPhone = document.querySelectorAll('.form-phone');
    const inputEmail = document.querySelectorAll('.form-email');

    const inputNameBottom = document.querySelector('#form2-name');
    const inputMessageBottom = document.querySelector('#form2-message');

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
     }

    inputsCalc.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d.]/g, '');
        });
    });

    inputName.forEach((input) => {
        input.addEventListener('blur', () => {
            //debugger;
            let reg = /[^А-Яа-яёЁ \-]/g;
            //let inp = '';
            if (reg.test(input.value)) {
                //debugger;
                input.value = input.value.replace(reg, '').replace(/(^\s-*)|(\s-*)$/g, ''); 
                console.log(input.value);
                //input.value = '';
            } else {
                input.value = titleCase(input.value.trim().replace(/(^\s*-)|(\s*-)$/g, ''));
            }
            //input.value = input.value.replace(/[^а-яё -]/iu, '');
        });
    });

    inputEmail.forEach((input) => {
        input.addEventListener('blur', () => {
            if(/[^A-Za-z-@!.*~']/.test(input.value)) {
                input.value = input.value.replace(/[^A-Za-z-@!.*~']/g, '');
            } else {
                input.value = input.value.replace(/(^\s*-)|(\s*-)$/g, '');
            }
        });
    });



    inputPhone.forEach((input) => {
        input.addEventListener('blur', () => {
            if (/[^\d-)(]/.test(input.value)) {
                input.value = input.value.replace(/[^\d-)(]/g, '');
            } else {
                input.value = input.value.trim().replace(/(^\s*-)|(\s*-)$/g, '');
            }
            //input.value = input.value.replace(/[^\d-)(]/g, '');
        }); 
    });

    inputNameBottom.addEventListener('input', () => {
        inputNameBottom.value = inputNameBottom.value.replace(/[^а-яё -]/iu, '');
    });

    inputMessageBottom.addEventListener('input', () => {
        inputMessageBottom.value = inputMessageBottom.value.replace(/[^а-яё -]/iu, '');
    });

};

export default regex;