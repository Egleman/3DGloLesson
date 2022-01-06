import { preload, done, errorForm } from './helpers';
const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер с вами свяжется';

    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if (input.value == '') {
                success = false;
            }
        });
        
        return success;
    };

    const sendData = async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        });
        return await res.json();
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = 'Загрузка...';
        statusBlock.style.color = 'white';

        if (form.contains(done)) {
            form.removeChild(done);
        }

        if (form.contains(errorForm)) {
            form.removeChild(errorForm);
        }
        if (form.contains(preload)) {
            form.removeChild(preload);
        }

        form.append(statusBlock);
        form.append(preload);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            console.log(element);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        console.log('submit');

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                form.removeChild(preload);
                form.append(done);
                statusBlock.textContent = successText;

                formElements.forEach(input => {
                    input.value = '';
                });
            })
            .catch(err => {
                form.removeChild(preload);
                form.append(errorForm);
                statusBlock.textContent = errorText; 
            });
        } else {
            alert("Данные не валидны!");
        }
    };
    
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            submitForm();
        });
    } catch(error) {
        console.log(error.message);
    }
};

export default sendForm;