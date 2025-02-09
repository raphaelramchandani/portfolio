document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuContainer = document.getElementById("menu-container");
    const navContainer = document.getElementById("nav-container");

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("open");
        navContainer.classList.toggle("open");
        menuButton.textContent = menuContainer.classList.contains("open") ? "close" : "menu";
    });

    // Ladeanimation
    window.onload = function () {
        // Loader ausblenden
        document.getElementById("loader").style.display = "none";

        // Hauptinhalt sichtbar machen
        document.getElementById("content").style.display = "block";
    };

    // Menu animation
    function handleScroll() {
        // Get the scroll position
        const scrollY = window.scrollY;

        // If the user scrolls up (scrollY decreases), make the nav visible
        if (scrollY < 50) { // Change 50 to your desired scroll position
            navContainer.classList.add('visible');
        } else {
            navContainer.classList.remove('visible');
        }
    }

    // Trigger the function on page load to show the nav immediately
    window.addEventListener('load', () => {
        navContainer.classList.add('visible');
    });

    // Trigger the function on scroll
    window.addEventListener('scroll', handleScroll);
});
