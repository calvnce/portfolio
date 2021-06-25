/**
 * Thid file handles the dynamic logics of the application
 */

import data from './datasource.js';
import {
  classItem, isLower, id,
} from './utils.js';

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
    const input = document.createElement('input');
    input.type = ('hidden');
    input.value = (e.id);
    input.className = ('hidden');
    cardDetails.appendChild(input);

    const button = document.createElement('button');
    button.className = ('card-btn');
    button.classList.add('t');
    button.id = ('button_'.concat(e.id));
    const buttonText = document.createTextNode('See Project');
    button.appendChild(buttonText);
    cardDetails.appendChild(button);

    card.appendChild(cardDetails);
  });
}

/** This function creates the popup modal
 * @param {none} - an event from the form submission events
 * @returns {none} - no return value
 */
function createModal() {
  const pId = classItem('.hidden').value;

  const card = classItem('.modal-container');
  card.className = ('card-modal');

  data.forEach((e) => {
    if (Number(pId) === e.id) {
      // Create close button
      const closeButton = document.createElement('span');
      closeButton.className = ('close');
      closeButton.innerHTML = ('&times;');
      closeButton.style.display = ('flex');
      card.appendChild(closeButton);

      // card image
      const imageContainer = document.createElement('div');
      imageContainer.className = ('card-image-container');
      const img = document.createElement('img');
      img.src = e.image;
      img.alt = 'Snapshoot';
      imageContainer.appendChild(img);
      card.appendChild(imageContainer);

      // Card details
      const cardDetails = document.createElement('div');
      cardDetails.className = ('card-modal-details');

      // Card name and title
      const cardHeadLine = document.createElement('div');
      cardHeadLine.className = ('card-modal-details-headline');
      const cardName = document.createElement('h3');
      cardName.appendChild(document.createTextNode(e.name));
      cardHeadLine.appendChild(cardName);

      const cardButton = document.createElement('div');
      cardButton.className = ('card-details-headline-button');

      const liveButton = document.createElement('button');
      liveButton.type = ('button');
      const liveLink = document.createElement('a');
      liveLink.href = e.live;
      liveLink.setAttribute('aria-label', 'true');
      const fas = document.createElement('i');
      fas.className = ('fas');
      fas.classList.add('fa-external-link-alt');
      liveLink.appendChild(document.createTextNode('See live'));
      liveLink.appendChild(fas);
      liveButton.appendChild(liveLink);
      cardButton.appendChild(liveButton);

      const sourceLink = document.createElement('a');
      sourceLink.href = e.repo;
      sourceLink.setAttribute('aria-label', 'true');
      const fab = document.createElement('i');
      fab.className = ('fab');
      fab.classList.add('fa-github');
      sourceLink.appendChild(document.createTextNode('See Source'));
      const sourceButton = document.createElement('button');
      sourceButton.type = ('button');
      sourceLink.appendChild(fab);
      sourceButton.appendChild(sourceLink);
      cardButton.appendChild(sourceButton);

      cardHeadLine.appendChild(cardButton);
      cardDetails.append(cardHeadLine);

      const ul = document.createElement('ul');
      e.addOns.forEach((val) => {
        const item = document.createElement('li');
        const itemText = document.createTextNode(val);
        item.appendChild(itemText);
        ul.appendChild(item);
      });
      cardDetails.appendChild(ul);

      const desc = document.createElement('p');
      desc.appendChild(document.createTextNode(e.desc));
      cardDetails.appendChild(desc);

      card.appendChild(cardDetails);
    }
  });
}
createModal();
/** This function perfoms form validation
*  @param { e } - an event from the form submission events
*  @returns { none } - no return value
*/
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

/** *********************************************
 * Local storage
 ********************************************* */
let person = {
  fname: '',
  lname: '',
  email: '',
};

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const userEmail = document.querySelector('#email');
const inputs = document.querySelectorAll('.inputs');

function save() {
  person.fname = firstName.value;
  person.lname = lastName.value;
  person.email = userEmail.value;

  window.localStorage.setItem('user', JSON.stringify(person));
}

function retrieve() {
  person = JSON.parse(window.localStorage.getItem('user'));
  firstName.value = person.fname;
  lastName.value = person.lname;
  userEmail.value = person.email;
}

/**
 * Activates the form button when clicked
 */
function validateOnClick() {
  id('contactButton').addEventListener('click', validate, true);
}

/**
 * This function activates the clicking of the button
 */
function saveOnChange() {
  inputs.forEach((e) => {
    e.addEventListener('change', save, true);
  });
}

// /**
//  * This function activates the clicking of the button
//  */
// function fetchOnLoad() {
//   window.addEventListener('load', , true);
// }

export {
  createCards, validateOnClick, saveOnChange, retrieve,
};