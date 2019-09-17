const header = document.querySelector(".header");
const hero = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.toggle("header-transition");
    }
});

const menuTrigger = document.querySelector(".menu-trigger");
const headerNav = document.querySelector(".header-nav");
const links = document.querySelectorAll(".nav-links li");

menuTrigger.addEventListener("click", () => {
    headerNav.classList.toggle("open");
});