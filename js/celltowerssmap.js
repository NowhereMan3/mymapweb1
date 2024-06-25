
let map2 = L.map('map').setView([58.373523, 26.716045], 12)
const osm2 =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm2.addTo(map2)



// add geoJSON points layer*
async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data)
 markers.addTo(map2)
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')
