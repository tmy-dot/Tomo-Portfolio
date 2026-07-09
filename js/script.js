const header=document.getElementById("header");
window.addEventListener("scroll",()=>header?.classList.toggle("is-scrolled",window.scrollY>40));
const hamburger=document.getElementById("hamburger");
const drawer=document.getElementById("drawer");
hamburger?.addEventListener("click",()=>{hamburger.classList.toggle("is-active");drawer.classList.toggle("is-open");});
drawer?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{drawer.classList.remove("is-open");hamburger.classList.remove("is-active");}));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("is-visible");});},{threshold:.15});
document.querySelectorAll(".fade-up").forEach(el=>observer.observe(el));