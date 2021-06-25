/**
 * Project: Personal Portfolio
 * Date: 12 - 06 -2021
 * Copyright (c) 2021 Calvince
 */
import {
  createCards, validateOnClick, saveOnChange, retrieve,
} from './script.js';
import initMenu from './menu.js';

(function () {
  /* Initializing the onload events */
  function init() {
    // Read data
    createCards();

    // Load data  from local browser
    retrieve();
  }

  // Windows events
  window.addEventListener('load', init, true);

  // Validate the form
  validateOnClick();

  // Menu functionality
  initMenu();

  // Save when input change
  saveOnChange();
}());