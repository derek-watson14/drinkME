// https://maps.googleapis.com/maps/api/geocode/json?address=seattle&sensor=true&key=AIzaSyAAydS0psLmxGTArqlZMhK88OOJyfrGfyg

var beerMap, cocktailMap;
// * JSON Search Return Object
// https://api.openbrewerydb.org/breweries?by_city=seattle
function initMap() {
  beerMap = new google.maps.Map(document.getElementById('beer-map'), {
    zoom: 10,
    center: new google.maps.LatLng(47.6062095,-122.3320708),
    streetViewControl: false,
    scaleControl: false,
    fullscreenControl: false,
  });

  cocktailMap = new google.maps.Map(document.getElementById('cocktail-map'), {
    zoom: 10,
    center: new google.maps.LatLng(47.6062095,-122.3320708),
    streetViewControl: false,
    scaleControl: false,
    fullscreenControl: false,
  });

  placeMarkersBeer(results);
}

function makeMappable(results) {
  return results.filter(function(item) {
    if (item.longitude && item.latitude) {
      return item;
    }
  }).map(function(item) {
    return {
      name: item.name,
      address1: item.street,
      address2: `${item.city}, ${item.state} ${item.postal_code.split("-")[0]}`,
      website: item.website_url,
      coords: {lat: parseFloat(item.latitude), lng: parseFloat(item.longitude)},
    }
  })
}

function relocateBeerMap(location) {
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&sensor=true&key=AIzaSyAAydS0psLmxGTArqlZMhK88OOJyfrGfyg`,
    method: 'GET',
  }).then(function(res) {
    var coords = res.results[0].geometry.location;
    beerMap.setCenter(coords)
  })
}

function placeMarkersBeer(results, location){
  relocateBeerMap(location);
  var mappableResults = makeMappable(results)
  mappableResults.forEach(function(brewery) {
    var { name, address1, address2, website, coords } = brewery;
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(coords),
      map: beerMap,
      title: name,
    })
    var contentString = `
      <div class="infowindow-container">
        <h6>${name}<h6>
        <p class="map-address">${address1}</p>
        <p class="map-address">${address2}</p>
        <a href="${website}" class="map-address" target="_blank">Website</p>
      </div>
    `;
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(beerMap, marker);
    });
  })
}