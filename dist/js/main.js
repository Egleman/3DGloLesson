(()=>{"use strict";function e({timing:e,draw:t,duration:r}){let n=performance.now();requestAnimationFrame((function a(o){let l=(o-n)/r;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(a)}))}const t=document.createElement("div");t.className="loader",t.innerHTML='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n  <rect x="0" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  <rect x="10" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0.2s" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  <rect x="20" y="0" width="4" height="16" fill="#19b5fe">\n  <animateTransform attributeType="xml"\n  attributeName="transform" type="translate"\n  values="0 0; 0 20; 0 0"\n  begin="0.4s" dur="0.6s" repeatCount="indefinite" />\n  </rect>\n  </svg>';const r=document.createElement("div");r.innerHTML='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" \nstroke="#19b5fe"  stroke-width="3" stroke-dasharray="100">\n<path id="check" d="M 12,22 L 22,31 L 36,13" \n   stroke-dashoffset="0">\n<animate attributeName="stroke-dashoffset" \n        from="100" to="0" dur="2s"></animate>\n</path>\n</svg>';const n=document.createElement("div");n.innerHTML='<svg width="48" height="48" viewBox="0 0 48 48" fill="none" \nstroke="#19b5fe" stroke-width="3" stroke-dasharray="100">\n<path id="fail" d="M 15,15 L 32,33 M 32,15 L 15,33" \n   stroke-dashoffset="0">\n<animate attributeName="stroke-dashoffset" \n        from="100" to="0" dur="2s">\n</animate>\n</path>\n</svg>';const a=({formId:e,someElem:a=[]})=>{const o=document.getElementById(e),l=document.createElement("div");let c=!0;const s=e=>{let t=!0;return e.forEach((e=>{""==e.value&&(t=!1)})),t};try{if(!o)throw new Error("Верните форму на место, пожалуйста!");o.addEventListener("submit",(e=>{e.preventDefault();const i=o.querySelectorAll("input");if(s(i)){(()=>{const e=o.querySelectorAll("input"),i=new FormData(o),u={};l.textContent="Загрузка...",l.style.color="white",o.contains(r)&&o.removeChild(r),o.contains(n)&&o.removeChild(n),o.contains(t)&&o.removeChild(t),o.append(l),o.append(t),i.forEach(((e,t)=>{u[t]=e})),a.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?u[e.id]=t.textContent:"input"===e.type&&(u[e.id]=t.value)})),s(e)?(async e=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"aplication/json"}});return await t.json()})(u).then((n=>{o.removeChild(t),o.append(r),l.textContent="Спасибо, наш менеджер с вами свяжется",e.forEach((e=>{e.value=""})),setTimeout((()=>{o.removeChild(r),o.removeChild(l)}),5e3)})).catch((e=>{o.removeChild(t),o.append(n),l.textContent="Ошибка...",setTimeout((()=>{o.removeChild(n),o.removeChild(l)}),5e3)})):(alert("Данные не валидны!"),c=!1)})();const e=document.querySelector(".popup");setTimeout((()=>{e.style.display="none"}),4e3)}}))}catch(e){console.log(e.message)}};(e=>{let t=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),a=null;const o=e=>e<10?"0"+e:e,l=()=>{let l=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,r=Math.floor(t/60/60),n=Math.floor(t/60%60),o=Math.floor(t%60);return t<=0&&(clearInterval(a),r=0,n=0,o=0),{timeRemaining:t,hours:r,minutes:n,seconds:o}})();t.textContent=o(l.hours),r.textContent=o(l.minutes),n.textContent=o(l.seconds)};l(),a=setInterval(l,1e3)})("19 january 2022"),(()=>{const e=document.querySelector("menu"),t=document.querySelector("main"),r=()=>{e.classList.toggle("active-menu")};document.body.addEventListener("click",(n=>{let a=n.target,o=a==e||e.contains(a),l=e.classList.contains("active-menu");if(a.closest(".menu"))r();else if(a.closest(".close-btn"))r();else if(a.closest('a[href*="#"]')&&t.contains(a)){n.preventDefault();const e=a.closest('a[href*="#"]').getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}else if(a.closest('a[href*="#"]')&&e.contains(a)){n.preventDefault();const e=a.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),r()}else!o&&l&&r()}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),r=document.querySelector(".popup");t.forEach((t=>{t.addEventListener("click",(()=>{window.screen.width<768?r.style.display="block":(r.style.display="block",r.style.opacity="0",e({duration:500,timing:e=>e,draw(e){r.style.opacity=e}}))}))})),r.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(r.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll(".form-name"),r=document.querySelectorAll(".form-phone"),n=document.querySelectorAll(".form-email"),a=document.querySelector("#form2-name"),o=document.querySelector("#form2-message");function l(e){return(e=(e=(e=(e=(e=e.replace(/\s+/g," ")).replace(/-+/g,"-")).replace(/\(+/g,"(")).replace(/\)+/g,")")).replace(/^[ |\-+]/g,"")).replace(/[ |\-+]$/g,"")}e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d.]/g,"")}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^а-яё \-]/gi,""),t=l(t),t=t.replace(/( |^)[ а-яё]/g,(e=>e.toUpperCase())),e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яё \-]/gi,"")}))})),n.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^A-Za-z-@!.*~']/g,""),t=l(t),e.target.value="",e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^A-Za-z-@!.*~']/g,"")}))})),r.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^\d-)(]/g,""),t=l(t),e.target.value="",e.target.value=t})),e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d-)(]/g,"")}))})),a.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^а-яё \-]/gi,""),t=l(t),t=t.replace(/( |^)[ а-яё]/g,(e=>e.toUpperCase())),e.target.value=t})),a.addEventListener("input",(()=>{a.value=a.value.replace(/[^а-яё \-]/gi,"")})),o.addEventListener("blur",(e=>{let t=e.target.value;t=t.replace(/[^а-яё \-]/gi,""),t=l(t),e.target.value="",e.target.value=t})),o.addEventListener("input",(()=>{o.value=o.value.replace(/[^а-яё \-]/gi,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-tab"),r=document.querySelectorAll(".service-header-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");r.forEach(((e,r)=>{e===n?(e.classList.add("active"),t[r].classList.remove("d-none")):(e.classList.remove("active"),t[r].classList.add("d-none"))}))}}))})(),((e,t,r,n,a,o,l,c,s)=>{const i=document.querySelector(`.${s}`);let u,d=document.querySelectorAll(`.${r}`),m=document.querySelector(`.${c}`),v=0;const p=(e,t,r)=>{e[t].classList.remove(r)},h=(e,t,r)=>{e[t].classList.add(r)},g=()=>{let r=document.querySelectorAll(`.${e}`);p(d,v,n),p(r,v,t),v++,v>=d.length&&(v=0),h(d,v,n),h(r,v,t)},f=(e=1500)=>{u=setInterval(g,e)};i.addEventListener("click",(r=>{r.preventDefault();let c=document.querySelectorAll(`.${e}`);r.target.matches(`.${e}, .${a}`)&&(p(d,v,n),p(c,v,t),r.target.matches(`#${o}`)?v++:r.target.matches(`#${l}`)?v--:r.target.classList.contains(e)&&c.forEach(((e,t)=>{r.target===e&&(v=t)})),v>=d.length&&(v=0),v<0&&(v=d.length-1),h(d,v,n),h(c,v,t))})),i.addEventListener("mouseenter",(t=>{t.target.matches(`.${e}, .${a}`)&&clearInterval(u)}),!0),i.addEventListener("mouseleave",(t=>{t.target.matches(`.${e}, .${a}`)&&f(2e3)}),!0),i&&d&&m&&((()=>{d=document.querySelectorAll(`.${r}`),m=document.querySelector(`.${c}`);for(let t=0;t<d.length;t++){let t=document.createElement("li");t.classList.add(e),m.append(t)}m.children[0].classList.add(`${t}`)})(),f(2e3))})("dot","dot-active","portfolio-item","portfolio-item-active","portfolio-btn","arrow-right","arrow-left","portfolio-dots","portfolio-content"),((t=100)=>{const r=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.querySelector("#total");r.addEventListener("input",(r=>{r.target!==n&&r.target!==a&&r.target!==o&&r.target!==l||(()=>{const r=+n.options[n.selectedIndex].value,s=a.value;let i=0,u=1,d=1;o.value>1&&(u+=+o.value/10),l.value&&l.value<5?d=2:l.value&&l.value<10&&(d=1.5),i=n.value&&a.value?t*r*s*u*d:0,e({duration:1e3,timing:e=>e,draw(e){c.textContent=Math.round(e*i)}})})()}))})(),a({formId:"form1",someElem:[{type:"block",id:"total"}]}),a({formId:"form2",someElem:[{type:"block",id:"total"}]}),a({formId:"form3",someElem:[{type:"block",id:"total"}]})})();