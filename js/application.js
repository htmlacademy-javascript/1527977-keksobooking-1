import { toggleClass, blockElement } from './util.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const filters = document.querySelector('.map__filters');
const filtersElements = filters.querySelectorAll('select, fieldset');
// const slider = document.querySelector('.ad-form__slider');

const lockoutForm = () => {
  toggleClass(form, 'ad-form--disabled');
  blockElement(formElements);
};

const lockoutFilters = () => {
  toggleClass(filters, 'map__filters--disabled');
  blockElement(filtersElements);
};

const lockoutPage = () => {
  lockoutForm();
  lockoutFilters();
  // blockElement(slider);
};

export { lockoutPage, lockoutForm, lockoutFilters };
