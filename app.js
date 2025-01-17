const btn = document.querySelector('.toggle-button');
const nav = document.querySelector('.main-nav_item');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
    nav.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
})
overlay.addEventListener('click', function () {
     nav.classList.toggle('hidden')
    overlay.classList.add('hidden')
})
