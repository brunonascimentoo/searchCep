function State() {
  this.container = null;
  this.btnClose = null;
  this.instaLink = null;
}

const state = new State();

export function init() {
  state.container = document.querySelector('#modal-contact');
  state.btnClose = document.querySelector('#modal-contact-close');
  state.instaLink = document.querySelector('a');

  state.btnClose.addEventListener('click', handleBtnCloseClick);
  state.container.addEventListener('click', handleContainerClick);
  state.instaLink.addEventListener('click', openInsta);
}

export function showModal() {
  state.container.classList.add('active');
}

export function closeModal() {
  state.container.classList.remove('active');
}

function handleBtnCloseClick(e) {
  e.preventDefault();
  closeModal();
}

function handleContainerClick(e) {
  e.preventDefault();
  if (e.target == this) {
    closeModal();
  }
}

function openInsta(e) {
  e.preventDefault();
  if (e.target) {
    window.open(e.target);
  }

}