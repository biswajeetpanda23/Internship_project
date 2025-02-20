document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navList = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});