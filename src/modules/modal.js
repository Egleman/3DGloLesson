import { animate } from './helpers';
const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            //Проверка размера экрана
            if(window.screen.width < 768) {
                modal.style.display = 'block';
            } else {
                modal.style.display = 'block';
                modal.style.opacity = '0';
                animate({
                    duration: 500,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                      modal.style.opacity = progress;
                    }
                  });
            }
        });
    });
    
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
    
};

export default modal;