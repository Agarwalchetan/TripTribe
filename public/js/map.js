const API_KEY = mapToken; // From EJS
  const fullAddress = listingAddress; // From EJS

  async function initMap() {
    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(
          fullAddress
        )}.JSON?key=${API_KEY}`
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const position = data.results[0].position;

        const map = tt.map({
          key: API_KEY,
          container: "map",
          // style: "tomtom://vector/1/basic-night", // Enable dark theme again if desired
          center: [position.lon, position.lat],
          zoom: 10,
        });

        // Create custom marker element with "C"
        const customMarker = document.createElement("div");
        customMarker.className = "custom-marker";
        customMarker.innerHTML = "C";

        // Create popup content
        const popup = new tt.Popup({ offset: 30 }).setHTML(`
          <strong>${fullAddress}</strong><br>
          <span>Custom Location Marker</span>
        `);

        // Add marker with popup
        new tt.Marker({ element: customMarker })
          .setLngLat([position.lon, position.lat])
          .setPopup(popup)
          .addTo(map);
      } else {
        document.getElementById("map").innerHTML =
          "<p>Location not found.</p>";
      }
    } catch (err) {
      console.error("Error loading map:", err);
      document.getElementById("map").innerHTML =
        "<p>Error loading map.</p>";
    }
  }

  initMap();