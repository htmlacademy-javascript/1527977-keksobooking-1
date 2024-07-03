import { getMap } from './map.js';
import './form.js';
import { lockoutPage, lockoutForm, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';
import { renderCards } from './advertisements.js';


const form = document.querySelector('.ad-form');

lockoutPage();

const onGetDataSuccess = (data) => {
  if(!form.classList.contains('ad-form--disabled')) {
    lockoutFilters();
    renderCards(data);
  }
};

getMap.then(lockoutForm())
  .then(getData(onGetDataSuccess, errorLoadingNotice));
