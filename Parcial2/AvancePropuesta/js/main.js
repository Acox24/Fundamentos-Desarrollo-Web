const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

console.log("JS cargado");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});