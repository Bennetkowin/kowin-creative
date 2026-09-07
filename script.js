const menuBtn=document.querySelector('.menu-btn');
const navbar=document.querySelector('.navbar');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=navbar.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'×':'☰';});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{navbar.classList.remove('open');menuBtn.textContent='☰';menuBtn.setAttribute('aria-expanded','false');}));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>10));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>revealObserver.observe(x));
const lightbox=document.getElementById('lightbox'), image=document.getElementById('lightbox-image'), title=document.getElementById('lightbox-title');
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');image.src='';}
document.querySelectorAll('.image-button').forEach(btn=>btn.addEventListener('click',()=>{image.src=btn.dataset.image;image.alt=btn.dataset.title;title.textContent=btn.dataset.title;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');}));
document.querySelector('.lightbox-close').addEventListener('click',closeBox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox();});
const sections=document.querySelectorAll('main section[id]'), links=document.querySelectorAll('.nav-links a');
const activeObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>activeObserver.observe(s));
