let menuAberto = false;

let currentSlide = 0;

function toggleMenu() {

    const nav = document.getElementById('barLateral');
    const main = document.getElementById('main');
    const button = document.querySelector('.openbtn');

    if (!menuAberto) {

        nav.style.width = '280px';
        main.style.marginLeft = '280px';
        button.style.left = '310px';

        menuAberto = true;

    } else {

        nav.style.width = '0';
        main.style.marginLeft = '0';
        button.style.left = '30px';

        menuAberto = false;
    }
}

function moveCarousel(direction) {

    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carouselItem');

    const visibleItems = window.innerWidth <= 980 ? 1 : 3;
    const maxSlide = items.length - visibleItems;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    }

    if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }

    const itemWidth = items[0].offsetWidth + 25;

    track.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
}

function openProject(title, image, description) {

    document.getElementById('modalTitle').textContent = title;

    document.getElementById('modalImage').src = image;

    document.getElementById('modalText').textContent = description;

    document
        .getElementById('projectModal')
        .classList
        .add('active');
}

function closeModal() {

    document
        .getElementById('projectModal')
        .classList
        .remove('active');
}