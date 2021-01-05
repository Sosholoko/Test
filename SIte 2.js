const btn = document.querySelector('.btn');
const nav = document.querySelector('.nav');

btn.onclick = function(){
    nav.classList.toggle('nav_open');
}