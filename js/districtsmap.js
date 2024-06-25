let map1 = L.map('map1').setView([58.373523, 26.716045], 12)
const osm1 =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm1.addTo(map1)


// add popup to each feature
function popUPinfo(feature, layer) {
 layer.bindPopup(feature.properties.NIMI)
}
// add geoJSON polygons layer
async function addDistrictsGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data, {
 onEachFeature: popUPinfo,
 style: polygonStyle,
 })
 polygons.addTo(map1)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')





