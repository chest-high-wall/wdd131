const menuButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});


const yearSpan = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


const lastModifiedSpan = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;
