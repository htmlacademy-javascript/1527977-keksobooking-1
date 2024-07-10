import { Header, MAX_PRICE, MIN_PRICE } from './constants.js';

const form = document.querySelector('.ad-form');
const typeHousing = form.querySelector('#type');

const pristine = new Pristine(form , {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--invalid text-help',
  errorTextTag: 'span',
});

const validateDescription = (value) => value.length <= Header.MAX_LENGTH && value.length >= Header.MIN_LENGTH;
const validateMaxPrice = (value) => value <= MAX_PRICE;
const validateMinPrice = (value) => value >= MIN_PRICE[typeHousing.value];

pristine.addValidator(
  form.querySelector('#title'),
  validateDescription,
  'введите от 30 до 100 символов'
);

pristine.addValidator(
  form.querySelector('#price'),
  validateMaxPrice,
  'Максимальное значение — 100 000'
);

pristine.addValidator(
  form.querySelector('#price'),
  validateMinPrice,
  'для «Бунгало» — минимальная цена за ночь 0, «Квартира» —  1 000, «Отель» — 3 000, «Дом» — 5 000, «Дворец» — 10 000.'
);

export { pristine };
