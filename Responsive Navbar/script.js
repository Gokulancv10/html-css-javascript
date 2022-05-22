const hamburgerIcon = document.getElementById("hamburgerIcon");
const navbar = document.getElementById("navbar");

hamburgerIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
