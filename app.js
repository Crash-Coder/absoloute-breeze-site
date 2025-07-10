const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

