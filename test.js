// Sélectionne le bouton menu et la liste de navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Ajoute un événement de clic pour afficher/masquer le menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
