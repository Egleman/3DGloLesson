(()=>{"use strict";(e=>{let t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=null;const c=e=>e<10?"0"+e:e,l=()=>{let e=(()=>{let e=(new Date("31 december 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),n=Math.floor(e/60%60),o=Math.floor(e%60);return e<=0&&(clearInterval(r),t=0,n=0,o=0),{timeRemaining:e,hours:t,minutes:n,seconds:o}})();t.textContent=c(e.hours),n.textContent=c(e.minutes),o.textContent=c(e.seconds)};l(),r=setInterval(l,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll('ul>li>a[href*="#"]'),r=document.querySelector("main").querySelector('a[href*="#"]'),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"}),c()}))})),r.addEventListener("click",(e=>{e.preventDefault();const t=r.getAttribute("href");document.querySelector(""+t).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close");let o=0,r=0;function c(){o+=.05,o>=1&&(o=1,cancelAnimationFrame(r)),t.style.opacity=o,r=requestAnimationFrame(c)}e.forEach((e=>{e.addEventListener("click",(()=>{window.screen.width<768?t.style.display="block":(t.style.display="block",t.style.opacity="0",r=requestAnimationFrame(c))}))})),n.addEventListener("click",(()=>{window.screen.width<768?t.style.display="none":(t.style.display="none",o=0,cancelAnimationFrame(r))}))})()})();