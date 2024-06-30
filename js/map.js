// С помощью API карт реализуйте показ балуна с подробной информацией об объявлении.
// Учтите нюансы поведения и ограничения для обычных меток и главной.

import { lockoutForm } from './application.js';

const form = document.querySelector('.ad-form');
const address = form.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    lockoutForm();
  })
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

export { map };

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.681729,
    lng: 139.753927,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});

//вернуть метку на место
// resetButton.addEventListener('click', () => {
//   mainPinMarker.setLatLng({
//     lat: 59.96831,
//     lng: 30.31748,
//   });
// });

//вернуть карту на место
// resetButton.addEventListener('click', () => {
//   mainPinMarker.setLatLng({
//     lat: 59.96831,
//     lng: 30.31748,
//   });

//   map.setView({
//     lat: 59.96831,
//     lng: 30.31748,
//   }, 16);
// });

// const rentPinIcon = L.icon({
//   iconUrl: './img/pin.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

// ADVERTISMENT.forEach(({lat, lng}) => {
//   const markerRent = L.marker({
//     lat,
//     lng,
//   },
//   {
//     icon: rentPinIcon,
//   },
//   );
//   markerRent.addTo(map);
// });
