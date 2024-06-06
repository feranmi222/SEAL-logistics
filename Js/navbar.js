const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const cancelBtn = document.getElementById('cancel-btn');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
    cancelBtn.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    cancelBtn.classList.remove('active');
});
