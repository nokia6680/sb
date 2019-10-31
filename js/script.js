const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-list');
const NavWrap = document.querySelector('.header-nav');

document.querySelector('.header-nav__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
  NavWrap.classList.toggle('active');
};
