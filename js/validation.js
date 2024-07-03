import { Header } from './constants.js';

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form , {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid text-help',
  errorTextTag: 'span',
});

const validateDescription = (value) => value.length <= Header.MAX_LENGTH && value.length >= Header.MIN_LENGTH;

pristine.addValidator(
  form.querySelector('#title'),
  validateDescription,
  'введите от 30 до 100 символов'
);

export { pristine };
