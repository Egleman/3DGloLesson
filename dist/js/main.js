(()=>{"use strict";(e=>{let t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds"),o=null;const l=e=>e<10?"0"+e:e,s=()=>{let e=(()=>{let e=(new Date("31 december 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),n=Math.floor(e/60%60),r=Math.floor(e%60);return e<=0&&clearInterval(o),{timeRemaining:e,hours:t,minutes:n,seconds:r}})();t.textContent=l(e.hours),n.textContent=l(e.minutes),r.textContent=l(e.seconds)};s(),o=setInterval(s,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),o=()=>{t.style.transform?t.style.transform="":t.style.transform="translateX(0)"};e.addEventListener("click",o),n.addEventListener("click",o);for(let e=0;e<r.length;e++)r[e].addEventListener("click",o)})()})();