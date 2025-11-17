import React, { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import goongjs from "@goongmaps/goong-js";
import "@goongmaps/goong-js/dist/goong-js.css";
import "./Location.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

const GOONG_MAP_TILES_KEY = import.meta.env.VITE_GOONG_MAP_TILES_KEY;
console.log(GOONG_MAP_TILES_KEY);
const dynamicData = {
  latitude: 21.0536,
  longitude: 105.7345,
  speed: 0,
};

goongjs.accessToken = GOONG_MAP_TILES_KEY;

const LocationScreen = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRoot = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new goongjs.Map({
      container: mapContainer.current,
      style: "https://tiles.goong.io/assets/goong_map_web.json",
      center: [dynamicData.longitude, dynamicData.latitude],
      zoom: 12,
    });

    map.current.addControl(new goongjs.NavigationControl());

    const el = document.createElement("div");
    el.className = "custom-marker";
    markerRoot.current = createRoot(el);
    markerRoot.current.render(
      <FaMapMarkerAlt
        style={{
          fontSize: "30px",
          color: "#007AFF",
          filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.5))",
        }}
      />
    );
    new goongjs.Marker(el)
      .setLngLat([dynamicData.longitude, dynamicData.latitude])
      .setPopup(
        new goongjs.Popup({ offset: 25 }).setHTML(
          `<h3>Vị trí xe</h3><p>Tốc độ: ${dynamicData.speed} km/h</p>`
        )
      )
      .addTo(map.current);

    return () => {
      if (markerRoot.current) {
        markerRoot.current.unmount();
      }
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="location-screen">
      <div ref={mapContainer} className="map-container" />
      {/* <div className="location-info">
        <p>Vĩ độ: {dynamicData.latitude}</p>
        <p>Kinh độ: {dynamicData.longitude}</p>
        <p>Tốc độ: {dynamicData.speed} km/h</p>
      </div> */}
    </div>
  );
};

export default LocationScreen;
