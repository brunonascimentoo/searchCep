function State() {
  this.listSection = null;
}

const state = new State();

export function init() {
  state.listSection = document.querySelector('#list-section');
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}

function createCard(address) {
  const div = document.createElement('div');
  div.classList.add('card-list-item');

  const div2 = document.createElement('div')
  const div3 = document.createElement('div')
  // div2.classList.add('card-list-item')


  const h3 = document.createElement('h3');
  h3.innerHTML = address.city;

  const p = document.createElement('p');
  p.innerHTML = `${address.street}, ${address.number}`

  const cep = document.createElement('p');
  cep.innerHTML = address.cep;

  const trash = document.createElement('i');
  trash.classList.add('ph-trash-bold');

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(cep);
  div.appendChild(div2)
  div.appendChild(div3)
  div2.appendChild(h3)
  div2.appendChild(p)
  div2.appendChild(cep)
  div3.appendChild(trash)

  return div;
}

