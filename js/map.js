import { StartAddress, SIGN_RAUND } from './constants.js';
import { getNumber } from './util.js';
import { createPopup } from './popup.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: StartAddress.LAT,
    lng: StartAddress.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

let coordinates;

function onMarkerMoveEnd(evt) {
  const latlng = evt.target.getLatLng();
  coordinates = `${getNumber(latlng.lat, SIGN_RAUND)}, ${getNumber(latlng.lng, SIGN_RAUND)}`;
  address.value = coordinates;
}

new Promise(() => {
  mainMarker.on('moveend', onMarkerMoveEnd);
});

const getMap = new Promise(() => {
  map.on('load', () => {
  });
});

const markerGroup = L.layerGroup().addTo(map);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (card) => {
  const marker = L.marker(
    {
      lat: card.location.lat,
      lng: card.location.lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createPopup(card));
};

const clearMarkers = () => markerGroup.clearLayers();

export { getMap, mainMarker, createMarker, clearMarkers };
