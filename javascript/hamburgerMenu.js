const hamburgerMenu = document.querySelector('nav .hamburger-menu');
const menuList = document.querySelector('.menu-list');
 
hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    menuList.classList.toggle('active');
});