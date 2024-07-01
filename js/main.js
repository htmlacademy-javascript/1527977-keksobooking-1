import './map.js';
import './form.js';
import { lockoutPage, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';

const form = document.querySelector('.ad-form');

lockoutPage();

const onGetDataSuccess = (data) => {
  if(!form.classList.contains('ad-form--disabled')) {
    lockoutFilters();
    console.log(data);
  }
};

getData(onGetDataSuccess, errorLoadingNotice);
