document.addEventListener('DOMContentLoaded', () => {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    const themeSwitcher = document.getElementById("themeSwitcher");
    themeSwitcher.onclick = () => {
        const inDarkMode = document.getElementById("app").classList.contains("dark-mode");
        if (document.getElementById("responsive-navbar-nav").classList.contains("show")) {
            const navbarParent = document.getElementById("navbar-parent");
            if (inDarkMode) {
                navbarParent.style.backgroundColor = "#e6e7e1";
            } else { navbarParent.style.backgroundColor = "#23272a"; }
            const hamburgerBtn = document.getElementById("navbar-hamburger");
            hamburgerBtn.onclick = () => navbarParent.classList.toggle("active");
        }
    }
});