const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItem = menu.querySelectorAll('ul>li>a');

    const heandlMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = '';
        }
    };

    menuBtn.addEventListener('click', heandlMenu);
    closeBtn.addEventListener('click', heandlMenu);

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', heandlMenu);
    }
};
export default menu;