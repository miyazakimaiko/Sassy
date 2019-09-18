window.onscroll = () => {
    headerShrink();
}

function headerShrink() {
    const pos = document.documentElement.scrollTop;
    const header = document.querySelector(".header");

    if( pos > window.innerHeight ) {
        header.style.backgroundColor = "rgb(7, 32, 70)";
        header.style.height = "7vh";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.height = "10vh";
    }
}

const menuTrigger = document.querySelector(".menu-trigger");
const headerNav = document.querySelector(".header-nav");
const links = document.querySelectorAll(".nav-links li");

menuTrigger.addEventListener("click", () => {
    headerNav.classList.toggle("open");
});

AOS.init();