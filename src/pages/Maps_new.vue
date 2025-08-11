<template>
  <card type="plain" title="Google Maps">
    <div id="map" class="map" style="height: 500px;"></div>
  </card>
</template>
<script>
export default {
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Check if Google Maps API is loaded
      if (typeof window.google === 'undefined' || !window.google.maps) {
        console.warn('Google Maps API not loaded. Please add a valid API key.');
        // Create a placeholder div with message
        const mapElement = document.getElementById("map");
        if (mapElement) {
          mapElement.innerHTML = `
            <div style="
              display: flex; 
              align-items: center; 
              justify-content: center; 
              height: 100%; 
              background-color: #1e1e2e; 
              color: #fff; 
              border-radius: 8px;
              text-align: center;
              padding: 20px;
            ">
              <div>
                <h4>Google Maps</h4>
                <p>To display the map, please:</p>
                <ol style="text-align: left; display: inline-block;">
                  <li>Get a Google Maps API key from <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" style="color: #00d4aa;">Google Console</a></li>
                  <li>Replace 'YOUR_GOOGLE_MAPS_API_KEY' in public/index.html</li>
                  <li>Enable Maps JavaScript API in your Google Console</li>
                </ol>
              </div>
            </div>
          `;
        }
        return;
      }

      let myLatlng = new window.google.maps.LatLng(40.748817, -73.985428);
      let mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#1d2c4d",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8ec3b9",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1a3646",
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4b6878",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#64779f",
              },
            ],
          },
          {
            featureType: "administrative.province",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#4b6878",
              },
            ],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#334e87",
              },
            ],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
              {
                color: "#023e58",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#283d6a",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6f9ba5",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#023e58",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3C7680",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#304a7d",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#98a5be",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#2c6675",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#9d2a80",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#9d2a80",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#b0d5ce",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#023e58",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#98a5be",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1d2c4d",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#283d6a",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#3a4762",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#0e1626",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#4e6d70",
              },
            ],
          },
        ],
      };
      
      let map = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      // Use regular Marker instead of AdvancedMarkerElement for better compatibility
      let marker = new window.google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Hello World!"
      });
    }
  }
};
</script>
<style>
.map {
  height: 500px;
  width: 100%;
}
</style>
