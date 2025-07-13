

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

async function loadFooter() {
    const res = await fetch('footer.html');
    const html = await res.text();
    document.getElementById('footer').innerHTML = html;
}


loadHeader();
loadFooter();