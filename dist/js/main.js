/**
 * Project: Personal Portfolio
 * Date: 12 - 06 -2021
 * Copyright (c) 2021 Calvince
 */
import { createCards, validateOnClick } from './script.js';
import initMenu from './menu.js';

(function () {
  /* Initializing the events */
  function init() {
    // Read data
    createCards();

    // Validate the form
    validateOnClick();

    // Menu functionality
    initMenu();
  }
  // Windows events
  window.addEventListener('load', init, true);
}());