import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import regex from './modules/regex';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
timer('31 december 2021');
menu();
modal();
regex();
tabs();
slider('dot', 'dot-active', 'portfolio-item',
'portfolio-item-active', 'portfolio-btn',
'arrow-right', 'arrow-left', 'portfolio-dots',
'portfolio-content');
calc();