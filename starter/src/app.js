const mapStyle = [{
  'featureType': 'administrative',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 33,
  },
  ],
},
{
  'featureType': 'landscape',
  'elementType': 'all',
  'stylers': [{
    'color': '#f2e5d4',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5dac6',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'labels',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 20,
  },
  ],
},
{
  'featureType': 'road',
  'elementType': 'all',
  'stylers': [{
    'lightness': 20,
  }],
},
{
  'featureType': 'road.highway',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5c6c6',
  }],
},
{
  'featureType': 'road.arterial',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#e4d7c6',
  }],
},
{
  'featureType': 'road.local',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#fbfaf7',
  }],
},
{
  'featureType': 'water',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'color': '#acbcc9',
  },
  ],
},
];
function initMap() {

  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 35.213959, lng: -80.018372},
    styles: mapStyle
  });

   
  // Load the stores GeoJSON onto the map.
  map.data.loadGeoJson('src/stores.json', {idPropertyName: 'storeid'});

    // Define the custom marker icons, using the store's "category".
    // map.data.setStyle((feature) => {
    //   return {
    //     icon: {
    //       url: `img/icon_${feature.getProperty('category')}.png`,
    //       scaledSize: new google.maps.Size(64, 64),
    //     },
    //   };
    // });

  const apiKey = 'YOUR_API_KEY';
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const name = event.feature.getProperty('name');
    const phone = event.feature.getProperty('phone');
    const scheduleURL = event.feature.getProperty('schedulepage');
    const clinicURL = event.feature.getProperty('clinicpage');
    const position = event.feature.getGeometry().get();
    const content = `
      <h2>${name}</h2><p></p>
      <p><b>Phone:</b> ${phone}</p>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}
