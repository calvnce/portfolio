/**
 * Thid file handles the dynamic logics of the application
 */

import data from './datasource.js';
import { classItem, isLower, id } from './utils.js';

const cardHolder = classItem('.card-holder');

/* This function creates the cards for holding the
*project cardDetails
*/
function createCards() {
  data.forEach((e) => {
    // Create card
    const card = document.createElement('div');
    card.className = ('card');
    cardHolder.appendChild(card);

    // Add card image
    const cardImage = document.createElement('div');
    cardImage.className = ('card-image');
    const img = document.createElement('img');
    img.src = e.image;
    img.alt = 'Snapshoot';
    cardImage.appendChild(img);
    card.appendChild(cardImage);

    /* Card Details */
    // Add card Title
    const cardDetails = document.createElement('div');
    cardDetails.className = ('card-details');
    const title = document.createElement('h3');
    const text = document.createTextNode(e.name);
    title.appendChild(text);
    cardDetails.appendChild(title);

    // Add stack
    const ul = document.createElement('ul');
    cardDetails.appendChild(ul);
    e.stack.forEach((val) => {
      const item = document.createElement('li');
      const itemText = document.createTextNode(val);
      item.appendChild(itemText);
      ul.appendChild(item);
    });
    cardDetails.appendChild(ul);

    // Add card button
    const button = document.createElement('button');
    button.className = ('card-btn');
    const buttonText = document.createTextNode('See Project');
    button.appendChild(buttonText);
    cardDetails.appendChild(button);

    card.appendChild(cardDetails);
  });
}

/* This function perfoms form validation */
function validate(e) {
  const email = id('email').value;
  const error = classItem('.error');

  if (!isLower(email)) {
    e.preventDefault();
    error.style.display = ('flex');
  } else {
    error.style.display = ('none');
    return true;
  }
  return false;
}

/**
 * Activates the form button when clicked
 */
function validateOnClick() {
  id('contactButton').addEventListener('click', validate);
}

export { createCards, validateOnClick };