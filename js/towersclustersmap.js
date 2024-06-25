let map3 = L.map('map').setView([58.373523, 26.716045], 12)
const osm3 =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm3.addTo(map3)


// add geoJSON layer
async function addCelltowersGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const markers = L.geoJson(data) 
 const clusters = L.markerClusterGroup() 
 clusters.addLayer(markers) 
 clusters.addTo(map3) 
}
addCelltowersGeoJson('geojson/tartu_city_celltowers_edu.geojson')
