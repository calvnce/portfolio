const data = [
  {
    name: 'calvince',
    age: 24,
    id: 1,
    topic: 'Intro',
    desc: 'tall dark handsome',
  },
  {
    name: 'Joyce',
    age: 24,
    id: 2,
    topic: 'Intro',
    desc: 'tall dark handsome',
  },
  {
    name: 'Malic',
    age: 24,
    id: 3,
    topic: 'Intro',
    desc: 'tall dark handsome',
  },
  {
    name: 'Kaleb',
    age: 24,
    id: 4,
    topic: 'Intro',
    desc: 'tall dark handsome',
  },
  {
    name: 'Otos',
    age: 24,
    id: 5,
    topic: 'Intro',
    desc: 'tall dark handsome',
  },
];

function createCards() {
  const cardContainer = document.querySelector('.card-container');

  data.forEach((e) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h2');
    h3.appendChild(document.createTextNode(e.topic));
    card.appendChild(h3);

    const p1 = document.createElement('p');
    p1.appendChild(document.createTextNode(e.name));
    card.appendChild(p1);

    const p2 = document.createElement('p');
    p2.appendChild(document.createTextNode(e.age));
    card.appendChild(p2);

    const button = document.createElement('buttton');
    button.classList.add('card-button');
    button.id = (e.id);
    button.appendChild(document.createTextNode('See Project'));
    card.appendChild(button);
    cardContainer.appendChild(card);
  });
}

function modal() {
  const { id } = this;
  const container = document.querySelector('.modal-container');
  data.forEach((e) => {
    if (Number(e.id) === Number(id)) {
      const modal = document.createElement('div');
      modal.classList.add('modal');

      const h3 = document.createElement('h2');
      h3.appendChild(document.createTextNode(e.topic));
      modal.appendChild(h3);

      const p1 = document.createElement('p');
      p1.appendChild(document.createTextNode(e.name));
      modal.appendChild(p1);

      const p2 = document.createElement('p');
      p2.appendChild(document.createTextNode(e.age));
      modal.appendChild(p2);

      const input = document.createElement('input');
      input.value = e.id;
      input.className = ('input-hidden');
      input.type = 'hidden';
      modal.appendChild(input);

      const button = document.createElement('buttton');
      button.classList.add('card-button');
      button.id = 'button_'.concat(input.value);
      button.appendChild(document.createTextNode('See Project'));

      modal.appendChild(button);
      container.appendChild(modal);
    }
  });
}

window.addEventListener('load', createCards, true);

function test() {
  const buttons = document.querySelectorAll('.card-button');
  buttons.forEach((button) => {
    button.addEventListener('click', modal, true);
  });
}

window.addEventListener('click', test, true);