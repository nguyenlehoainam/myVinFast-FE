import React, { useEffect, useRef, useState } from "react";
import goongjs from "@goongmaps/goong-js";
import "@goongmaps/goong-js/dist/goong-js.css";
import "./Location.scss";

const GOONG_API_KEY = import.meta.env.VITE_GOONG_MAP_TILES_KEY;

const dynamicData = {
  latitude: 21.028511,
  longitude: 105.804817,
  speed: 0,
};

const LocationScreen = () => {
  const mapContainerRef = useRef(null);

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    goongjs.accessToken = GOONG_API_KEY;

    console.log(goongjs.accessToken);

    const positionLngLat = [dynamicData.longitude, dynamicData.latitude];
    const map = new goongjs.Map({
      container: mapContainerRef.current,
      style: "https://tiles.goong.io/assets/goong_map_web.json",
      center: positionLngLat,
      zoom: 15,
    });

    mapRef.current = map;

    map.on("load", () => {
      const popupContent = `
          <div>
            <h4>Vị trí hiện tại</h4>
            <p>Tốc độ: ${dynamicData.speed} km/h</p>
          </div>
        `;

      const popup = new goongjs.Popup({ offset: 25 }).setHTML(popupContent);

      new goongjs.Marker().setLngLat(positionLngLat).setPopup(popup).addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="location-screen">
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default LocationScreen;
