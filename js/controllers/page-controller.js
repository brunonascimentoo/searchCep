import * as modalController from './modal-controller.js';


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

function removeCard(e) {
  const el = e.target;
  const removeCardFromDiv = document.querySelector('.card-list-item')
  if (el) {
    removeCardFromDiv.remove()
    return;
  }
}