const getFilterElements = (form) => {
  const filterTypeSelect = form.querySelector('#housing-type');
  const filterPriceSelect = form.querySelector('#housing-price');
  const filterRoomsSelect = form.querySelector('#housing-rooms');
  const filterGuestsSelect = form.querySelector('#housing-guests');
  const filterFeaturesCheckboxes = Array.from(form.querySelectorAll('#housing-features input'));

  return {
    filterTypeSelect,
    filterPriceSelect,
    filterRoomsSelect,
    filterGuestsSelect,
    filterFeaturesCheckboxes
  };
};

const getSelectedFilters = (filterElements) => {
  const {
    filterTypeSelect,
    filterPriceSelect,
    filterRoomsSelect,
    filterGuestsSelect,
    filterFeaturesCheckboxes
  } = filterElements;

  const features = Array.from(filterFeaturesCheckboxes)
    .filter(({ checked }) => checked)
    .map(({ value }) => value);

  return {
    type: filterTypeSelect.value,
    price: filterPriceSelect.value,
    rooms: filterRoomsSelect.value,
    guests: filterGuestsSelect.value,
    features
  };
};

const getFilteredPrice = (price) => {
  if (price < 10000) {
    return 'low';
  } else if (price < 50000) {
    return 'middle';
  } return 'high';
};

const filterByFilters = ({ type, price, rooms, guests, features }) => (card) => {
  const typeMatch = type === 'any' || type.toLowerCase() === card.offer.type.toLowerCase();
  const priceMatch = price === 'any' || getFilteredPrice(card.offer.price) === price;
  const roomsMatch = rooms === 'any' || +card.offer.rooms === +rooms;
  const guestsMatch = guests === 'any' || +card.offer.guests === +guests;
  const featuresMatch = features.length === 0 || features.every((feature) => card.offer?.features?.includes(feature));

  return typeMatch && priceMatch && roomsMatch && guestsMatch && featuresMatch;
};

export { getFilterElements, getSelectedFilters, filterByFilters };
