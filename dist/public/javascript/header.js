"use strict";

var menuBtnElement = document.querySelector('#menuBtn');
var menuElement = document.querySelector('#header-container-bar');
var shadowMenu = document.querySelector('.header-container-bar .shadow');
menuBtnElement.addEventListener('click', function () {
  menuElement.style.display = 'flex';
});
shadowMenu.addEventListener('click', function () {
  menuElement.style.display = 'none';
});