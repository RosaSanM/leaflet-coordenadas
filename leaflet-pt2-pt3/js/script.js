let map = L.map('leaflet').setView([41.387020200752154, 2.166046991855064], 19);
let marker = null;
let popup = L.popup();

//making map
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

//making icon
let myIcon = L.icon({
    iconUrl: './img/marker.png',
    iconSize: [90, 95],
    iconAnchor: [25, 16],
    popupAnchor: [-3, -76],
});

function onMapClick(e) {
    
    popup
        //show coordinates
        .setLatLng(e.latlng)
        .openOn(map)
        .setContent("You clicked the map at latitude: " + e.latlng.lat.toString() +" and longitude: " + e.latlng.lng.toString())
        
        //put new marker on map and remove old marker
        if(marker){
            map.removeLayer(marker);
        }
        marker = L.marker([e.latlng.lat.toString(),e.latlng.lng.toString()], {icon: myIcon}).addTo(map);
        map = setView([e.latlng.lat.toString(),e.latlng.lng.toString()]);
        
}

map.on('click', onMapClick);




