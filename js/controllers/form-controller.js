import Address from "../models/address.js";
import * as addressService from '../services/address-service.js'
import * as listController from './list-controller.js'

function State() {

  this.address = new Address();

  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State();

export function init() {
  state.inputCep = document.forms.newAddress.cep;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;
  state.inputCity = document.forms.newAddress.city;

  state.btnSave = document.forms.newAddress.btnSave
  state.btnClear = document.forms.newAddress.btnClear

  state.errorCep = document.querySelector('[data-error="cep"]')
  state.errorNumber = document.querySelector('[data-error="number"]')
  state.removeCard = document.querySelector('#removeCardList')

  state.inputNumber.addEventListener('change', handleInputNumberChange);
  state.inputNumber.addEventListener('keyup', handleInputNumberKeyUp);
  state.inputCep.addEventListener('change', handleInputCepChange);

  state.btnClear.addEventListener('click', handleBtnClearClick);
  state.btnSave.addEventListener('click', handleBtnSaveClick);
}

function handleInputNumberKeyUp(e) {
  state.address.number = e.target.value;
}

function handleInputNumberChange(e) {
  if (e.target.value === '') {
    setFormError('number', 'campo requerido');
  } else {
    setFormError('number', '')
  }
}

async function handleInputCepChange(e) {
  const cep = e.target.value;

  try {
    const address = await addressService.findByCep(cep);
    state.inputStreet.value = address.street;
    state.inputCity.value = address.city;
    state.address = address;

    setFormError('cep', '')

    state.inputNumber.focus();
  }
  catch (e) {
    state.inputStreet.value = '';
    state.inputCity.value = '';
    state.inputNumber.value = '';
    setFormError('cep', 'informe um cep válido')
  }

}

export function handleBtnSaveClick(e) {
  e.preventDefault();

  const error = addressService.getErrors(state.address);
  const keys = Object.keys(error)

  if (keys.length > 0) {
    keys.forEach(key => {
      setFormError(key, error[key])
    })
  }
  else {
    listController.addCard(state.address);
    clearForm();
  }

}

function handleBtnClearClick(e) {
  e.preventDefault();
  clearForm();
}

function clearForm() {
  state.inputCep.value = '';
  state.inputCity.value = '';
  state.inputNumber.value = '';
  state.inputStreet.value = '';

  setFormError('cep', '');
  setFormError('number', '');

  state.address = new Address();

  state.inputCep.focus();
}

function setFormError(key, value) {
  const el = document.querySelector(`[data-error="${key}"]`)
  el.innerHTML = value;
}
