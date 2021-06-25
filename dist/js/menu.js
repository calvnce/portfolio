/*
 * This file handles the dynamic logics of the menu
*/
import { classItem, classItems } from './utils.js';
// Variables
let isOpen = false;
const main = classItem('.main');
const menu = classItem('.mobile-menu-button');
const menuItem = classItem('.mobile-menu-button-item');
const nav = classItem('.desktop-menu');
const logo = classItem('.logo');
const links = classItems('.desktop-menu-item');
const closeButton = classItem('.desktop-mobile-menu-item');

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

function initMenu() {
  menu.addEventListener('click', menuToggle);
  closeButton.addEventListener('click', menuToggle);
  resetMenu();
}

export default initMenu;