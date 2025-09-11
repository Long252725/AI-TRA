const menuBtnElement = document.querySelector('#menuBtn');
const menuElement = document.querySelector('#header-container-bar');
const shadowMenu = document.querySelector('.header-container-bar .shadow');
menuBtnElement.addEventListener('click', () => {
    menuElement.style.display = 'flex'
});
shadowMenu.addEventListener('click', () => {
    menuElement.style.display = 'none'
});