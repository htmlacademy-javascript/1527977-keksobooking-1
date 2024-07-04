import { sendData } from './api.js';
import { showSuccessNotice, showErrorNotice } from './notice.js';
import { StartAddress, SIGN_RAUND, FILE_TYPES, ButtonStatus } from './constants.js';
import { pristine } from './validation.js';
import { getNumber } from './util.js';
import { mainMarker } from './map.js';

const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');
const buttonPublish = form.querySelector('.ad-form__submit');
const uploadAvatar = form.querySelector('#avatar');
const imgAvatar = form.querySelector('.ad-form-header__preview > img');
const uploadImages = form.querySelector('#images');
const imgImages = form.querySelector('.ad-form__photo');
const buttonReset = form.querySelector('.ad-form__reset');

address.readOnly = true;

const addressValueSrart = `${getNumber(StartAddress.LAT, SIGN_RAUND)}, ${getNumber(StartAddress.LNG, SIGN_RAUND)}`;

address.value = addressValueSrart;

const renderPhoto = (input, image) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const srcName = URL.createObjectURL(file);
    if(image.tagName === 'IMG') {
      image.src = srcName;
    } image.style.backgroundImage = `url(${srcName})`;
  }
};

uploadAvatar.addEventListener('change', () => {
  renderPhoto(uploadAvatar, imgAvatar);
});

uploadImages.addEventListener('change', () => {
  renderPhoto(uploadImages, imgImages);
});

const success = () => {
  form.reset();
  showSuccessNotice();
};

const error = () => {
  showErrorNotice();
};

const blockButton = (status = false) => {
  buttonPublish.disabled = status;
  buttonPublish.textContent = status ? ButtonStatus.SENDING : ButtonStatus.DEFAULT;
};

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if(pristine.validate()){
    blockButton(true);
    await sendData(success, error, new FormData(form));
    blockButton();
  }
});

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  mainMarker.setLatLng({
    lat: StartAddress.LAT,
    lng: StartAddress.LNG,
  });
  address.value = addressValueSrart;
});
