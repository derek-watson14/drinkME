// https://maps.googleapis.com/maps/api/geocode/json?address=seattle&sensor=true&key=${key}

var beerMap, cocktailMap, storeLocator;
// ! Maps Key
// * Requests are restricted on google dev account to prevent exposed key abuse
var key = "AIzaSyAAydS0psLmxGTArqlZMhK88OOJyfrGfyg";

function initMap() {
  beerMap = new google.maps.Map(document.getElementById('beer-map'), {
    zoom: 3,
    center: new google.maps.LatLng(37.0902,-95.7129),
    streetViewControl: false,
    scaleControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
  });
  
  cocktailMap = new google.maps.Map(document.getElementById('cocktail-map'), {
    zoom: 3,
    center: new google.maps.LatLng(37.0902,-95.7129),
    streetViewControl: false,
    scaleControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
  });

  storeLocator = new google.maps.places.PlacesService(cocktailMap);
}

function makeMappable(results) {
  // TODO check street, geocode street in map()
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
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&sensor=true&key=${key}`,
    method: 'GET',
  }).then(function(res) {
    var coords = res.results[0].geometry.location;
    beerMap.setCenter(coords);
    beerMap.setZoom(10);
  })
}

function placeMarkersBeer(results, location){
  relocateBeerMap(location);
  var mappableResults = makeMappable(results);
  var infowindows = [];
  mappableResults.forEach(function(brewery, i) {
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
    infowindows.push(infowindow);
    marker.addListener('click', function() {
      infowindows.forEach(window => window.close());
      infowindow.open(beerMap, marker);
    });
  })
}

$("#locate-stores").click(function() {
  navigator.geolocation.getCurrentPosition(function({coords}) {
    var request = {
      location: {lat: coords.latitude, lng: coords.longitude},
      radius: '100', 
      query: 'Liquor Store',
    }
    // https://stackoverflow.com/questions/33464173/google-map-places-javascript-text-search-cant-get-radius-to-work
    storeLocator.textSearch(request, function(results, status) { 
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var infowindows = [];
        results.forEach(function(place) {
          var addressAry = place.formatted_address.split(", ");
          var address1 = addressAry[0];
          var address2 = `${addressAry[1]}, ${addressAry[2]}`
          var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: cocktailMap,
            title: name,
          })
          var contentString = `
            <div class="infowindow-container">
              <h6>${place.name}<h6>
              <p class="map-address">${address1}</p>
              <p class="map-address">${address2}</p>
            </div>
          `;
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          infowindows.push(infowindow);
          marker.addListener('click', function() {
            infowindows.forEach(window => window.close());
            infowindow.open(cocktailMap, marker);
          });
        });
        cocktailMap.setCenter({lat: coords.latitude, lng: coords.longitude});
        cocktailMap.setZoom(10);
      }  
    })
  })
});