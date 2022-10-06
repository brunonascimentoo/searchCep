import * as modalController from './modal-controller.js'
import * as listController from './list-controller.js'


export function init() {
  const contactLink = document.querySelector('.contact-link')
  contactLink.addEventListener('click', handleContactLinkClick)

  const removeCardList = document.querySelector('#removeCardList')
  removeCardList.addEventListener('click', removeCard)
}

function handleContactLinkClick(e) {
  e.preventDefault();
  modalController.showModal();

}

export function removeCard(e) {
  const el = e.target;
  const hideCardCep = document.querySelector('.card-list-item')


  if (el) {
    hideCardCep.classList.add('hide')
    console.log(el)
  }

}