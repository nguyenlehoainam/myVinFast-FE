import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Location.scss";
import L from "leaflet";

const GOONG_MAP_TILES_KEY = import.meta.env.VITE_GOONG_MAP_TILES_KEY;

const dynamicData = {
  latitude: 21.028511,
  longitude: 105.804817,
  speed: 0,
};

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

// Component phụ giúp map di chuyển theo vị trí mới
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const LocationScreen = () => {
  const position = [dynamicData.latitude, dynamicData.longitude];

  return (
    <div className="location-screen">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <ChangeView center={position} zoom={15} />
        <TileLayer
          attribution='&copy; <a href="https://goong.io/">Goong</a>'
          // Đảm bảo URL bắt đầu bằng https:// và không có lỗi cú pháp
          url={`https://tiles.goong.io/maps/streets/{z}/{x}/{y}@2x.png?api_key=${GOONG_MAP_TILES_KEY}`}
        />

        <Marker position={position}>
          <Popup>
            Vị trí hiện tại <br /> Tốc độ: {dynamicData.speed} km/h
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationScreen;
