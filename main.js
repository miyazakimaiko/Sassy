AOS.init();

// HEADER SHRINK ANIMATION
window.onscroll = () => {
    headerShrink();
}

function headerShrink() {
    const pos1 = document.documentElement.scrollTop;
    const pos2 = document.body.scrollTop;
    const header = document.querySelector(".header");

    if( pos1 > (window.innerHeight/2) || pos2 > (window.innerHeight/2) ) {
        header.style.backgroundColor = "rgba(27,32,48,1)";
        header.style.height = "7vh";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.height = "10vh";
    }
}

// TOGGLE NAV MENU ANIMATION
const menuTrigger = document.querySelector(".menu-trigger");
const headerNav = document.querySelector(".header-nav");
const links = document.querySelectorAll(".nav-links li");
const a = document.querySelectorAll(".nav-links li a")

menuTrigger.addEventListener("click", () => {
    headerNav.classList.toggle("open");
});

// HERO SLIDER ANIMATION
window.addEventListener('load', () => {
    sliderStart();
});

function sliderStart() {
    const slide = document.getElementById('slide-wrap');
    const slideItem = slide.querySelectorAll('.slide-item');
    const totalNum = slideItem.length -1;
    const fadeTime = 2000;
    const intervalTime = 5000;
    let actNum = 0;
    let currentSlide;
    let nextSlide;

    // the first slide fades in
    slideItem[0].classList.add('show_', 'zoom_');

    setInterval(() => {
        if (actNum < totalNum) {
            currentSlide = slideItem[actNum];
            nextSlide = slideItem[++actNum];

            currentSlide.classList.remove('show_');
            nextSlide.classList.add('show_', 'zoom_');
            setTimeout(() => {
                currentSlide.classList.remove('zoom_');
            }, fadeTime);
        } else {
            currentSlide = slideItem[actNum];
            nextSlide = slideItem[actNum = 0];

            currentSlide.classList.remove('show_');
            nextSlide.classList.add('show_', 'zoom_');
            setTimeout(() => {
                currentSlide.classList.remove('zoom_');
            }, fadeTime);
        };
    }, intervalTime);
}