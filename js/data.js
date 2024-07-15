import { createMarker, clearMarkers } from './map.js';
import { getFilterElements, getSelectedFilters, filterByFilters } from './filters.js';
import { MAX_MARKERS } from './constants.js';

const filterForm = document.querySelector('.map__filters');

const processingData = (data) => {
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

export { processingData };
