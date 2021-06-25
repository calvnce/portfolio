/*
  * This file contains the functions that are reused
  * throught the project
*/

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

/**
 * @param {string} idValue - an element ID
 * @returns {Object} DOM object associated with id
* */
function id(idName) {
  return document.getElementById(idName);
}

/*
* This function checks if the string is only in lower case
*/

function isLower(str) {
  str = str.replace(/[^a-zA-Z ]/g, '');
  const chars = str.split(/(?:)/u);
  let lower = true;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] !== chars[i].toLowerCase()) {
      lower = false;
      break;
    }
  }
  return lower;
}

export {
  classItem, classItems, id, isLower,
};