// Initialize and add the map
let map;
var positions ;
async function initMap() {

  const position = { lat: 28.613, lng: 77.209 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: positions[4],
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Soul Stone",
  });
  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: positions[0],
    title: "Time Stone",
  });
  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: positions[2],
    title: "Power Stone",
  });
  const marker4 = new AdvancedMarkerElement({
    map: map,
    position: positions[3],
    title: "Reality Stone",
  });
  const marker5 = new AdvancedMarkerElement({
    map: map,
    position: positions[4],
    title: "Mind Stone",
  });
  const marker6 = new AdvancedMarkerElement({
    map: map,
    position: positions[1],
    title: "Space Stone",
  });
}

fetch('http://localhost:3000/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Log the received object
    positions = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });


initMap();