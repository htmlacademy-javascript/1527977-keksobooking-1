export const SIGN_RAUND = 5;
export const START_PRICE = 1000;
export const MAX_PRICE = 100000;
export const MAX_MARKERS = 10;
export const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';

export const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

export const Route = {
  GET_DATA: '/data',
};

export const Method = {
  POST: 'POST',
};

export const ErrorText = {
  GET_DATA: 'Не удалось загрузить объявления. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

export const Header = {
  MIN_LENGTH: 30,
  MAX_LENGTH: 100,
};

export const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export const TIME = [
  {
    value: '12:00',
    timein: 'После 12',
    timeout: 'Выезд до 12',
  },
  {
    value: '13:00',
    timein: 'После 13',
    timeout: 'Выезд до 13',
  },
  {
    value: '14:00',
    timein: 'После 14',
    timeout: 'Выезд до 14',
  },
];

export const ButtonStatus = {
  DEFAULT: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const StartAddress = {
  LAT: 35.681729,
  LNG: 139.753927,
};
