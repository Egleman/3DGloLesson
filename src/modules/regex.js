const regex = () => {
    const inputsCalc = document.querySelectorAll('.calc-item');
    const inputName = document.querySelectorAll('.form-name');

    inputsCalc.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\d.]/g, '');
        });
    });

    inputName.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^а-я -]/iu, '');
        });
    });
};

export default regex;