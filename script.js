document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuContainer = document.getElementById("menu-container");
    const navContainer = document.getElementById("nav-container");

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("open");
        navContainer.classList.toggle("open");
        menuButton.textContent = menuContainer.classList.contains("open") ? "close" : "menu";
    });
});