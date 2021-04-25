const burgerBtn = document.getElementById("menu-bar");
const closeBtn = document.getElementById("closeBtn");

const menu = document.getElementById("mobile-nav-menu");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

window.onload = () => {
    burgerBtn.addEventListener('click', event => {
        menu.style.display = "flex";
        overlay.style.display = "block";
        window.scroll(0,0);
        body.style.overflow = "hidden";
    });

    closeBtn.addEventListener('click', event => {
        menu.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    });
}




