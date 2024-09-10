var map = L.map('map').setView([47.4632732993425, 2.3810388094763892], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 6, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var epitechIcon = L.icon({
    iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
    iconSize: [40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

var cities = [
    {name: 'Paris', coords: [48.86627734422805, 2.3736426385684943], popupText: 'EDS Paris Rock ☝️🤓'},
    {name: 'Lyon', coords: [45.76828239123232, 4.833135770901926], popupText: 'EDS Lyon'},
    {name: 'Bordeaux', coords: [44.87422295574778, -0.5785707537656938], popupText: 'EDS Bordeaux'}
];

cities.forEach(function(city) {
    var marker = L.marker(city.coords, { icon: epitechIcon }).addTo(map)
        .bindPopup(city.popupText); 

    L.marker(city.coords, {
        icon: L.divIcon({
            className: 'city-label', 
            html: `<span>${city.name}</span>`,
            iconSize: [100, 20], 
            iconAnchor: [50, -10]
        })
    }).addTo(map);

    marker.on('click', function() {
        marker.openPopup();
    });
});
