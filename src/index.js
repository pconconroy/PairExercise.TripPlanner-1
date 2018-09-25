console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1IjoicGNvbmNvbnJveSIsImEiOiJjam1pNGI1bHgwMTUyM3FuemVxcnRzOTJlIn0.gmmmkQQ_RVtVxILrekR1Ug";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = 'url("http://i.imgur.com/WbMOfMl.png")';
markerDomEl.style.background = 'black';
new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);