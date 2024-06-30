// ещё мы добавим альтернативную возможность указать цену за ночь:
// С помощью библиотеки noUiSlider (/vendor/nouislider) реализуйте указание цены за ночь.

// Похожим образом обработайте нажатие на кнопку сброса.

// Фотография жилья должна загружаться через поле загрузки файлов
// в блоке .ad-form__upload и показываться в блоке .ad-form__photo.

// import {isEscapeKey, isElementInFocus} from './util.js';
// import { sendData } from './api.js';
// import { showSuccessNotice, showErrorNotice } from './notice.js';
// import { FILE_TYPES, ButtonStatus } from './constants.js';
import { FILE_TYPES } from './constants.js';

const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');
// const buttonPublish = form.querySelector('#ad-form__submit');
const uploadAvatar = form.querySelector('#avatar');
const imgAvatar = form.querySelector('.ad-form-header__preview > img');
const uploadImages = form.querySelector('#images');
const imgImages = form.querySelector('.ad-form__photo');

address.readOnly = true;

const renderPhoto = (input, img) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    img.src = URL.createObjectURL(file);
    img.style.backgroundImage = `url('${img.src}')`;
  }
};

uploadAvatar.addEventListener('change', () => {
  renderPhoto(uploadAvatar, imgAvatar);
});

uploadImages.addEventListener('change', () => {
  renderPhoto(uploadImages, imgImages);
});

// const blockButton = (status = false) => {
//   buttonPublish.disabled = status;
//   buttonPublish.textContent = status ? ButtonStatus.SENDING : ButtonStatus.DEFAULT;
// };

// form.addEventListener('submit', async (evt) => {
//   evt.preventDefault();
//   if(pristine.validate()){
//     blockButton(true);
//     await sendData(success, error, new FormData(form));
//     blockButton();
//   }
// });


