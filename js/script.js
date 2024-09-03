function toggleMenu() {
    var navbar = document.getElementById('container-fluid');
    var button = document.querySelector('.navbar-toggle');
    var isScrolled = window.scrollY > 0;

    navbar.classList.toggle('show');

    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.classList.remove('scroll-active');
    } else {
        button.classList.add('active');
        if (isScrolled) {
            button.classList.add('scroll-active');
        } else {
            button.classList.remove('scroll-active');
        }
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const logo = document.querySelector('#Logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const container_fluid = document.querySelector('#container-fluid');
    const bars = document.querySelectorAll('.bar');
    const button = document.querySelector('.navbar-toggle');
    const isScrolled = window.scrollY > 0;

    if (isScrolled) {
        navbar.style.backgroundColor = '#081C58';
        navbar.style.color = '#ffffff';
        container_fluid.style.backgroundColor = '#081C58';
        bars.forEach(bar => {
            bar.style.backgroundColor = '#ffffff';
        });
        navLinks.forEach(link => {
            link.style.color = '#ffffff';
        });
        logo.setAttribute("src", "./images/logo 2.png");
        if (button.classList.contains('active')) {
            button.classList.add('scroll-active');
        }
    } else {
        navbar.style.backgroundColor = 'transparent';
        container_fluid.style.backgroundColor = '#ffffff';
        bars.forEach(bar => {
            bar.style.backgroundColor = '#101010';
        });
        button.classList.remove('scroll-active');
        navbar.style.color = '#081C58';
        navLinks.forEach(link => {
            link.style.color = '#081C58';
        });
        logo.setAttribute("src", "./images/Foodie Logo.png");
    }
});
