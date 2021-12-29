const slider = (dot, dotActive, portfolioItem, portfolioItemActive, portfolioBtn, arrowRight, arrowLeft, portfolioDots, portfolioContent) => {
    const sliderBlock = document.querySelector(`.${portfolioContent}`);
    let slides = document.querySelectorAll(`.${portfolioItem}`);
    let dotsUl = document.querySelector(`.${portfolioDots}`);

    let currentSlide = 0;
    let timeInterval = 2000;
    let interval;

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        let dots = document.querySelectorAll(`.${dot}`);
        prevSlide(slides, currentSlide, portfolioItemActive);
        prevSlide(dots, currentSlide, dotActive);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, portfolioItemActive);
        nextSlide(dots, currentSlide, dotActive);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        
        let dots = document.querySelectorAll(`.${dot}`);

        if(!e.target.matches(`.${dot}, .${portfolioBtn}`)) {
            return;
        }

        prevSlide(slides, currentSlide, portfolioItemActive);
        prevSlide(dots, currentSlide, dotActive);

        if (e.target.matches(`#${arrowRight}`)) {
            currentSlide++;
        } else if (e.target.matches(`#${arrowLeft}`)) {
            currentSlide--;
        } else if (e.target.classList.contains(dot)) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, portfolioItemActive);
        nextSlide(dots, currentSlide, dotActive);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if(e.target.matches(`.${dot}, .${portfolioBtn}`)) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if(e.target.matches(`.${dot}, .${portfolioBtn}`)) {
            startSlide(timeInterval);
        }
    }, true);

    const addDot = () => {
		    slides = document.querySelectorAll(`.${portfolioItem}`);
			dotsUl = document.querySelector(`.${portfolioDots}`);
            for (let i = 0; i < slides.length; i++) {
                let dots = document.createElement('li');
                dots.classList.add(dot);
                dotsUl.append(dots);
            }
            dotsUl.children[0].classList.add(`${dotActive}`);
		
	};
    if (sliderBlock && slides && dotsUl) {
        addDot();
        startSlide(timeInterval);
    }
};

export default slider;