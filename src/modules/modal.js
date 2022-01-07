import { animate } from './helpers';
const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    function blockBody() {
        const body = document.body;
        body.style.overflow = 'hidden';
        const bodyScroll = calcScroll();
        body.style.marginRight = `${bodyScroll}px`;
    }

    function unBlockBody() {
        const body = document.body;
        body.style.overflow = 'auto';
        body.style.marginRight = `0`;
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '500px';
        div.style.height = '500px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            //Проверка размера экрана
            if(window.screen.width < 768) {
                modal.style.display = 'block';
                blockBody();
            } else {
                modal.style.display = 'block';
                blockBody();
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
            unBlockBody();
        }
    });
    
};

export default modal;