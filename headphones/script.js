let menu = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

menu.addEventListener("click", function() {
    menu.classList.toggle("active");
    navLinks.classList.toggle("show");
})