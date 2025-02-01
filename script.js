document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuContent = document.getElementById("menu-content");
    const navContatainer = document.getElementById("nav-container");

    menuButton.addEventListener("click", () => {
        menuContent.classList.toggle("open");
        navContatainer.classList.toggle("open");
        menuButton.textContent = menuContent.classList.contains("open") ? "close" : "menu";
    });
});