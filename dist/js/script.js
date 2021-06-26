/**
 * Thid file handles the dynamic logics of the application
 */

import data from './datasource.js';
import { isLower } from './utils.js';
import { menuControl } from './menu.js';

/** *********************************************
 * Dynamic DOM elements including modals
 ********************************************* */
/* This function creates the cards for holding the
*project cardDetails
*/
function createCards() {
  const cardHolder = document.querySelector('.card-holder');

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
    button.classList.add('card-button');
    button.id = (e.id);
    button.onclick = 'a(this)';
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
  const { id } = this;
  const modalContainer = document.querySelector('.modal-container');
  const content = document.querySelectorAll('.content');

  data.forEach((e) => {
    if (Number(id) === Number(e.id)) {
      content.forEach((c) => {
        c.classList.add('blur');
      });
      modalContainer.style.visibility = ('visible');

      const card = document.createElement('div');
      card.className = ('card-modal');

      // Create close button
      const closeButton = document.createElement('span');
      closeButton.className = ('close');
      const times = document.createElement('i');
      times.className = ('fas');
      times.classList.add('fa-times');
      closeButton.appendChild(times);
      card.appendChild(closeButton);
      closeButton.addEventListener('click', () => {
        content.forEach((c) => {
          c.classList.remove('blur');
        });
        modalContainer.style.visibility = ('hidden');
      });

      // card image
      const imageContainer = document.createElement('div');
      imageContainer.className = ('card-modal-image-container');
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
      modalContainer.appendChild(card);
    }
  });
}

window.addEventListener('load', createCards, true);

/**
 * Activate the button click event to create the popups
 */
function modal() {
  const buttons = document.querySelectorAll('.card-button');
  buttons.forEach((button) => {
    button.addEventListener('click', createModal, true);
  });
}

window.addEventListener('load', modal, true);

/** *********************************************
 * Form Validation
 ********************************************* */
/* This function perfoms form validation */
function validate(e) {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');

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
document.getElementById('contactButton').addEventListener('click', validate, true);

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
 * This function activates the clicking of the button
 */
inputs.forEach((e) => {
  e.addEventListener('change', save, true);
});

window.addEventListener('load', retrieve, true);

menuControl();