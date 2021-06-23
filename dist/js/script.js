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

  // Variables
  let isOpen = false;
  const menu = classItem('.mobile-menu-button');
  const menuItem = classItem('.mobile-menu-button-item');
  const nav = classItem('.desktop-menu');

  /* Toggle the navigation */
  function menuToggle() {
    if (!isOpen) {
      menuItem.classList.add('open');
      nav.classList.add('open');
      isOpen = true;
    } else {
      menuItem.classList.remove('open');
      nav.classList.remove('open');
      isOpen = false;
    }
  }

  /* Initializing the events */
  function init() {
    menu.addEventListener('click', menuToggle);
  }
  // Windows events
  window.addEventListener('load', init, true);
}());