var map = L.map('map').setView([-5.1893, -39.3078], 8); // Centro aproximado do Ceará

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

d3.json("ceara.json").then(function(data) {
    L.geoJson(data).addTo(map);
});