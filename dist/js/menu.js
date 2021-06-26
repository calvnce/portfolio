/*
 * This file handles the dynamic logics of the menu
*/

let isOpen = false;
const main = document.querySelector('.main');
const menu = document.querySelector('.mobile-menu-button');
const menuItem = document.querySelector('.mobile-menu-button-item');
const nav = document.querySelector('.desktop-menu');
const logo = document.querySelector('.logo');
const links = document.querySelector('.desktop-menu-item');
const closeButton = document.querySelector('.desktop-mobile-menu-item');

/* Toggle the navigation */
function menuToggle() {
  if (!isOpen) {
    menuItem.classList.add('open');
    nav.classList.add('open');

    // Hide logo text
    logo.style.display = ('none');
    main.style.backgroundColor = ('#e5e5e5;');
    isOpen = true;
  } else {
    menuItem.classList.remove('open');
    nav.classList.remove('open');

    // Show logo text
    logo.style.display = ('inline-block');
    main.style.backgroundColor = ('#fff;');
    isOpen = false;
  }
}

function resetMenu() {
  links.forEach((element) => {
    // Hide logo text
    element.addEventListener('click', () => {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
      menuItem.classList.remove('open');
      nav.classList.remove('open');
      logo.style.display = ('inline-block');
    });
  });
}

function menuControl() {
  menu.addEventListener('click', menuToggle);
  closeButton.addEventListener('click', menuToggle);
  resetMenu();
}

// eslint-disable-next-line import/prefer-default-export
export { menuControl };