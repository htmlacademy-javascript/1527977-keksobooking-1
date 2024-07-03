import { StartAddress, SIGN_RAUND } from './constants.js';
import { getNumber } from './util.js';

const address = document.querySelector('#address');

// const map = L.map('map-canvas')
//   .on('load', () => {
//     lockoutForm();
//   })
//   .setView({

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

const marker = L.marker(
  {
    lat: StartAddress.LAT,
    lng: StartAddress.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

let coordinates;

function onMarkerMoveEnd(evt) {
  const latlng = evt.target.getLatLng();
  coordinates = `${getNumber(latlng.lat, SIGN_RAUND)}, ${getNumber(latlng.lng, SIGN_RAUND)}`;
  address.value = coordinates;
}

new Promise(() => {
  marker.on('moveend', onMarkerMoveEnd);
});

const getMap = new Promise(() => {
  map.on('load', () => {
  });
});

export { getMap };
