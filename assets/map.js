// https://maps.googleapis.com/maps/api/geocode/json?address=seattle&sensor=true&key=AIzaSyAAydS0psLmxGTArqlZMhK88OOJyfrGfyg

var map;
// * JSON Search Return Object
// https://api.openbrewerydb.org/breweries?by_city=seattle
var results = [
  {
      "id": 7499,
      "name": "Hellbent Brewing Company",
      "brewery_type": "micro",
      "street": "13035 Lake City Way NE",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98125-4428",
      "country": "United States",
      "longitude": "-122.2931111",
      "latitude": "47.7238772",
      "phone": "2063613707",
      "website_url": "http://www.hellbentbrewingcompany.com",
      "updated_at": "2018-08-24T16:35:37.928Z",
      "tag_list": []
  },
  {
      "id": 7526,
      "name": "Lagunitas Seattle Taproom and Beer Sanctuary",
      "brewery_type": "brewpub",
      "street": "1550 NW 49th St",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98107-4731",
      "country": "United States",
      "longitude": "-122.3784629",
      "latitude": "47.6645881",
      "phone": "2067842230",
      "website_url": "",
      "updated_at": "2018-08-24T16:36:09.395Z",
      "tag_list": []
  },
  {
      "id": 7587,
      "name": "Northwest Peaks Brewery",
      "brewery_type": "micro",
      "street": "5718 Rainier Ave S",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98118-2704",
      "country": "United States",
      "longitude": "-122.277436437754",
      "latitude": "47.5509916925813",
      "phone": "2067252337",
      "website_url": "http://www.nwpeaksbrewery.com",
      "updated_at": "2018-08-24T16:37:30.036Z",
      "tag_list": []
  },
  {
      "id": 7657,
      "name": "Schooner Exact Brewing Co",
      "brewery_type": "micro",
      "street": "3901 1st Ave S",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98134-2236",
      "country": "United States",
      "longitude": "-122.3354879",
      "latitude": "47.5678008",
      "phone": "2064329734",
      "website_url": "",
      "updated_at": "2018-08-24T16:39:07.161Z",
      "tag_list": []
  },
  {
      "id": 7445,
      "name": "Elysian Brewing Co -Tangletown",
      "brewery_type": "large",
      "street": "2106 N 55th St",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98103-6202",
      "country": "United States",
      "longitude": "-122.333474",
      "latitude": "47.6687837",
      "phone": "2065475929",
      "website_url": "",
      "updated_at": "2018-08-24T16:34:25.309Z",
      "tag_list": []
  },
  {
      "id": 7546,
      "name": "Magnuson Cafe and Brewery",
      "brewery_type": "planning",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98115",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "",
      "website_url": "",
      "updated_at": "2018-08-11T21:40:19.790Z",
      "tag_list": []
  },
  {
      "id": 7347,
      "name": "Bad Jimmy's Brewing Co",
      "brewery_type": "micro",
      "street": "4358B Leary Way NW",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98107-4554",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2067891548",
      "website_url": "http://www.badjimmysbrewingco.com",
      "updated_at": "2018-08-11T21:40:11.848Z",
      "tag_list": []
  },
  {
      "id": 7350,
      "name": "Bainbridge Island Brewing",
      "brewery_type": "micro",
      "street": "9415 Coppertop Loop NE Ste 104",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98110-3339",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2064514646",
      "website_url": "http://www.bainbridgebeer.com",
      "updated_at": "2018-08-11T21:40:11.946Z",
      "tag_list": []
  },
  {
      "id": 7380,
      "name": "Brewery in Planning - Seattle",
      "brewery_type": "planning",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98199-2747",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "",
      "website_url": "",
      "updated_at": "2018-08-11T21:40:13.000Z",
      "tag_list": []
  },
  {
      "id": 7381,
      "name": "Brewery In Planning - Seattle",
      "brewery_type": "planning",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98115-3330",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2062871710",
      "website_url": "",
      "updated_at": "2018-08-11T21:40:13.034Z",
      "tag_list": []
  },
  {
      "id": 7358,
      "name": "Belltown Brewery",
      "brewery_type": "brewpub",
      "street": "200 Bell St",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98121-1716",
      "country": "United States",
      "longitude": "-122.3456669",
      "latitude": "47.6142953",
      "phone": "2064857233",
      "website_url": "http://www.belltownbrewingseattle.com",
      "updated_at": "2018-08-24T16:32:46.257Z",
      "tag_list": []
  },
  {
      "id": 7365,
      "name": "Big Time Brewery",
      "brewery_type": "brewpub",
      "street": "4133 University Way NE",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98105-6213",
      "country": "United States",
      "longitude": "-122.313575948865",
      "latitude": "47.65785225",
      "phone": "2065454509",
      "website_url": "http://www.bigtimebrewery.com",
      "updated_at": "2018-08-24T16:32:56.057Z",
      "tag_list": []
  },
  {
      "id": 7372,
      "name": "Bluebird Microcreamery and Brewery",
      "brewery_type": "micro",
      "street": "7400 Greenwood Ave N",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98103-5044",
      "country": "United States",
      "longitude": "-122.355108",
      "latitude": "47.6826657",
      "phone": "2066598154",
      "website_url": "http://www.bluebirdbrewing.com",
      "updated_at": "2018-08-24T16:33:05.363Z",
      "tag_list": []
  },
  {
      "id": 7391,
      "name": "Burke-Gilman Brewing",
      "brewery_type": "planning",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98105-5652",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2066121439",
      "website_url": "http://www.burkegilmanbrewing.com/",
      "updated_at": "2018-08-11T21:40:13.385Z",
      "tag_list": []
  },
  {
      "id": 7409,
      "name": "Counterbalance Brewing Company",
      "brewery_type": "micro",
      "street": "503 S Michigan St Ste B",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98108-3305",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2064533615",
      "website_url": "http://www.counterbalancebeer.com",
      "updated_at": "2018-08-11T21:40:14.004Z",
      "tag_list": []
  },
  {
      "id": 7412,
      "name": "Crooked Label Brewing Company",
      "brewery_type": "planning",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98125-6454",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2062931956",
      "website_url": "",
      "updated_at": "2018-08-11T21:40:14.079Z",
      "tag_list": []
  },
  {
      "id": 7421,
      "name": "Dirty Couch Brewing",
      "brewery_type": "micro",
      "street": "",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98107",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2063696614",
      "website_url": "http://www.dirtycouchbrewing.com",
      "updated_at": "2018-08-11T21:40:14.524Z",
      "tag_list": []
  },
  {
      "id": 7390,
      "name": "Burdick Brewery",
      "brewery_type": "proprietor",
      "street": "8520 14th Ave S",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98108-4803",
      "country": "United States",
      "longitude": "-122.3145617",
      "latitude": "47.5267286",
      "phone": "2069099632",
      "website_url": "http://www.burdickbrewery.com",
      "updated_at": "2018-08-24T16:33:17.490Z",
      "tag_list": []
  },
  {
      "id": 7405,
      "name": "Cloudburst Brewing",
      "brewery_type": "micro",
      "street": "2116 Western Ave",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98121-2110",
      "country": "United States",
      "longitude": "-122.3452717",
      "latitude": "47.6116138",
      "phone": "2066026061",
      "website_url": "http://www.cloudburstbrew.com",
      "updated_at": "2018-08-24T16:33:34.739Z",
      "tag_list": []
  },
  {
      "id": 7444,
      "name": "Elysian Brewing Co - Elysian Fields",
      "brewery_type": "large",
      "street": "542 1st Ave S Ste B",
      "city": "Seattle",
      "state": "Washington",
      "postal_code": "98104-2882",
      "country": "United States",
      "longitude": null,
      "latitude": null,
      "phone": "2063824498",
      "website_url": "http://www.elysianbrewing.com",
      "updated_at": "2018-08-11T21:40:15.459Z",
      "tag_list": []
  }
];

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

var mappableResults = makeMappable(results)

function createMap() {
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAydS0psLmxGTArqlZMhK88OOJyfrGfyg&callback=initMap';
  script.defer = true;
  script.async = true;

  window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(47.6062095,-122.3320708),
      mapTypeId: 'terrain'
    });
    mappableResults.forEach(function(brewery) {
      var { name, address1, address2, website, coords } = brewery;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(coords),
        map: map,
        title: name,
      })
      var contentString = `
        <div class="infowindow-container">
          <h6>${name}<h6>
          <p class="map-address">${address1}</p>
          <p class="map-address">${address2}</p>
          <a href="${website}" class="map-address">Website</p>
        </div>
      `;
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    })
  }
  document.head.appendChild(script);
}