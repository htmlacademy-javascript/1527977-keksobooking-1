import './map.js';
import './form.js';
import { lockoutPage, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';
// import './photoLoader.js';
// import { renderPhotos } from './renderPhotos.js';
// import { setOnFilterClick, turnFilterOn, filterPhotos } from './filters.js';

const form = document.querySelector('.ad-form');

lockoutPage();

// 1.3. Активное состояние фильтров.
// Успешная загрузка данных об объявлениях с сервера переводит
//  в активное состояние фильтры. В этом состоянии страница позволяет:
// Просматривать похожие объявления на карте;
// Фильтровать объявления;
// Уточнять подробную информацию об объявлениях, показывая для каждого карточку.

// const onGetDataSuccess = (data) => {

const onGetDataSuccess = () => {
  if(!form.classList.contains('ad-form--disabled')) {
    lockoutFilters();
  }
  // console.log(data);
  // turnFilterOn(data);
  // renderPhotos(filterPhotos());
  // setOnFilterClick(renderPhotos);
};

getData(onGetDataSuccess, errorLoadingNotice);
