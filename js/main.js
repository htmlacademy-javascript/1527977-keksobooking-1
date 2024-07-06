import { getMap, createMarker, clearMarkers } from './map.js';
import './form.js';
import { lockoutPage, lockoutForm, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';
import { getFilterElements, filterByFilters, getSelectedFilters} from './filters.js';

lockoutPage();

const MAX_MARKERS = 10;

const onGetDataSuccess = (data) => {
  lockoutFilters();
  const filterForm = document.querySelector('.map__filters');
  const slicedData = data.slice(0, MAX_MARKERS);
  slicedData.forEach(createMarker);
  const filterElements = getFilterElements(filterForm);
  const onFilterChange = () => {
    const filters = getSelectedFilters(filterElements);
    const filteredData = data.filter(filterByFilters(filters));
    const slicedFilteredData = filteredData.slice(0, MAX_MARKERS);
    clearMarkers();
    slicedFilteredData.forEach(createMarker);
  };
  filterForm.addEventListener('change', onFilterChange);
};

getMap.then(lockoutForm())
  .then(getData(onGetDataSuccess, errorLoadingNotice));
