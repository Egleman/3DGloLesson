const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    //Переменные для анимации
    let end = 0, step = 0.05, popUpInterval = 0;

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            //Проверка размера экрана
            if(window.screen.width < 768) {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'block';
                modal.style.opacity = '0';
                popUpInterval = requestAnimationFrame(popUpAnimation);
            }
        });
    });
    
    
    function popUpAnimation() {
        end += step;
        if (end >= 1) {
            end = 1;
            cancelAnimationFrame(popUpInterval);
        } 
        modal.style.opacity = end;
        popUpInterval = requestAnimationFrame(popUpAnimation);  
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            //Проверка размера экрана
            if (window.screen.width < 768) {
                modal.style.display = 'none';
            } else {
                modal.style.display = 'none';
                end = 0; 
                cancelAnimationFrame(popUpInterval);
            }
        }
    });
    
};

export default modal;