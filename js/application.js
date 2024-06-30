import { toggleClass, blockElement } from './util.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');
const filters = document.querySelector('.map__filters');
const filtersElements = filters.querySelectorAll('select, fieldset');
// Слайдер также должен быть заблокирован ad-form__slider;

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
};

export { lockoutPage, lockoutForm, lockoutFilters };
