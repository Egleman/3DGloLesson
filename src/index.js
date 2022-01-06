import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import regex from './modules/regex';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
timer('19 january 2022');
menu();
modal();
regex();
tabs();
slider('dot', 'dot-active', 'portfolio-item',
'portfolio-item-active', 'portfolio-btn',
'arrow-right', 'arrow-left', 'portfolio-dots',
'portfolio-content');
calc();
sendForm({ 
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({ 
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});
sendForm({ 
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
});

