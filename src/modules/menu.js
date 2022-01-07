const menu = () => {
    const menu = document.querySelector('menu');
    const mainBlock = document.querySelector('main');

    const heandlMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (e) => {
        let target = e.target;
        let its_menu = target == menu || menu.contains(target);
        let menu_is_active = menu.classList.contains('active-menu');
        if(target.closest('.menu')) {
            heandlMenu();
        } else if (target.closest('.close-btn')) {
            e.preventDefault();
            heandlMenu();
        } else if (target.closest('a[href*="#"]') && mainBlock.contains(target)) {
            e.preventDefault();
            const blockId = target.closest('a[href*="#"]').getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (target.closest('a[href*="#"]') && menu.contains(target)) {
            e.preventDefault();
            const blockId = target.getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            heandlMenu();
        } else if (!its_menu && menu_is_active) {
            heandlMenu();
        }
    });
};
export default menu;