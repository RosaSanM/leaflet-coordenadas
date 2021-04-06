//making map
let map = L.map('leaflet').setView([41.387020200752154, 2.166046991855064], 19);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

//personalize marker
let myIcon = L.icon({
    iconUrl: './img/hoguera.png',
    iconSize: [80, 95],
    iconAnchor: [25, 20],
   
});

let marker = L.marker([41.387020200752154, 2.166046991855064], {icon: myIcon}).addTo(map)
    .bindPopup('Restaurant Cent Focs.<br>Restaurante mediterráneo<br>Carrer Balmes, 16, 0807, Barcelona.')
    .openPopup();

