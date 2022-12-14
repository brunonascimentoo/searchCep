
function State() {
  this.listSection = null;
  this.btnTrash = null;
  this.divCardList = null;
}

const state = new State();

export function init() {
  state.listSection = document.querySelector('#list-section');
  state.btnTrash = document.getElementById('removeCardList');
  state.divCardList = document.querySelector('.card-list-item');
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}


export function createCard(address) {

  const div = document.createElement('div');
  div.setAttribute('id', 'deleteCard');
  div.classList.add('card-list-item');

  const h3 = document.createElement('h3');
  h3.innerHTML = address.city;

  const p = document.createElement('p');
  p.innerHTML = `${address.street}, ${address.number}`;

  const cep = document.createElement('p');
  cep.innerHTML = address.cep;

  const btnTrash = document.createElement('i');
  btnTrash.classList.add('ph-trash-bold');
  btnTrash.setAttribute('id', 'removeCardList');
  btnTrash.onclick = function removeDiv(e) {
    e.preventDefault();
    const el = e.target;
    if (el === btnTrash) div.remove();

  }


  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div.appendChild(div2);
  div.appendChild(div3);
  div2.appendChild(h3);
  div2.appendChild(p);
  div2.appendChild(cep);
  div3.appendChild(btnTrash);

  return div;
}