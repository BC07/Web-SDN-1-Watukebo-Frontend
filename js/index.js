// Responsive Navigasi Bar
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cencelBtn = document.querySelector(".cencel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("active");
}

cencelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
}