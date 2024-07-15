import { START_PRICE } from './constants.js';

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

valueElement.value = START_PRICE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1000,
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
