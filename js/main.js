import { getMap, createMarker } from './map.js';
import './form.js';
import { lockoutPage, lockoutForm, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';

const form = document.querySelector('.ad-form');

lockoutPage();

const onGetDataSuccess = (data) => {
  if(!form.classList.contains('ad-form--disabled')) {
    lockoutFilters();
    data.forEach((card) => {
      createMarker(card);
    });
  }
};

getMap.then(lockoutForm())
  .then(getData(onGetDataSuccess, errorLoadingNotice));

