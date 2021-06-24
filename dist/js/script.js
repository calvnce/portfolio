/**
 * Project: Personal Portfolio
 * Date: 12 - 06 -2021
 * Copyright (c) 2021 Calvince
 */

(function () {
  // Utility functions

  // /**
  //  * @param {string} idValue - an element ID
  //  * @returns {Object} DOM object associated with id
  //  * */
  // function id(idName) {
  //   return document.getElementById(idName);
  // }

  /**
   * @param {string} className - a classs name of the html elements
   * @returns {Object} Dom object(s) of the associated html elements
   */
  function classItem(className) {
    return document.querySelector(className);
  }

  /**
   * @param {string} className - a classs name of the html elements
   * @returns {Object} Dom objects of the associated html elements
   */
  function classItems(className) {
    return document.querySelectorAll(className);
  }

  // Variables
  let isOpen = false;
  const menu = classItem('.mobile-menu-button');
  const menuItem = classItem('.mobile-menu-button-item');
  const nav = classItem('.desktop-menu');
  const logo = classItem('.logo');
  const links = classItems('.desktop-menu-item');

  /* Toggle the navigation */
  function menuToggle() {
    if (!isOpen) {
      menuItem.classList.add('open');
      nav.classList.add('open');

      // Hide logo text
      logo.style.display = ('none');
      isOpen = true;
    } else {
      menuItem.classList.remove('open');
      nav.classList.remove('open');

      // Show logo text
      logo.style.display = ('inline-block');
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

  /* Initializing the events */
  function init() {
    menu.addEventListener('click', menuToggle);
    resetMenu();
  }
  // Windows events
  window.addEventListener('load', init, true);
}());