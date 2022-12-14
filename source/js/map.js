const map = L.map('map')
.on('load', () => {
  console.log('карта инициализирована')
})
  .setView({
    lat: 59.96833963311766,
    lng: 30.31764149665833,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/icons/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
})

const mainPinMarker = L.marker(
  {
    lat: 59.96833963311766,
    lng: 30.31764149665833,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
