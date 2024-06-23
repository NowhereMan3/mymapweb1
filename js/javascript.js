let map1 = L.map('map1').setView([58.373523, 26.716045], 12)
const osm1 =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm1.addTo(map1)

let map2 = L.map('map2').setView([58.373523, 26.716045], 12)
const osm2 =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm2.addTo(map2)

// Default map settings
function defaultMapSettings(mapId) {
  if (mapId === 'map1') {
    map1.setView([58.373523, 26.716045], 12);
  } else if (mapId === 'map2') {
    map2.setView([58.373523, 26.716045], 12);
  }
}





// add popup to each feature
function popUPinfo(feature, layer) {
 layer.bindPopup(feature.properties.NIMI)
}
// add geoJSON polygons layer
async function addDistrictsGeoJson(map, url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data, {
  onEachFeature: popUPinfo,
 style: polygonStyle,
 })
 polygons.addTo(map)
}


// get color from feature property
function getColor(property) {
 switch (property) {
 case 9:
 return '#ff0000'
 case 3:
 return '#009933'
 case 14:
 return '#0000ff'
 case 10:
 return '#ff0066'
 default:
 return '#ffffff'
 }
}

// polygon style
function polygonStyle(feature) {
 return {
 fillColor: getColor(feature.properties.OBJECTID),
 fillOpacity: 0.5,
 weight: 1,
 opacity: 1,
 color: 'grey',
 }
}


addDistrictsGeoJson(map1, 'geojson/tartu_city_districts_edu.geojson')


function createCircle(feature, latlng) {
 let options = {
 radius: 5,
 fillColor: 'red',
 fillOpacity: 0.5,
 color: 'red',
 weight: 1,
 opacity: 1,
 }
 return L.circleMarker(latlng, options)
}

// add geoJSON points layer*
async function addCelltowersGeoJson(map,url) {
 const response = await fetch(url)
 const data = await response.json()
  const markers = L.geoJson(data) 
 const clusters = L.markerClusterGroup() 
 clusters.addLayer(markers) 
 clusters.addTo(map)
}
addCelltowersGeoJson(map2,'geojson/tartu_city_celltowers_edu.geojson')


