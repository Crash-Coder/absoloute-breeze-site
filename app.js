

async function loadHeader() {
    const res = await fetch('header.html');
    const html = await res.text();
    document.getElementById('header').innerHTML = html;


    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');


    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

}


loadHeader();