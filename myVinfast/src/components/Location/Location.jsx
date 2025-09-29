// src/components/Location/Location.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Location.scss";
import L from "leaflet";

// 1. IMPORT CÁC FILE ẢNH BẰNG CÚ PHÁP IMPORT CHUẨN
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Giả lập dữ liệu GPS từ file JSON
const dynamicData = {
  latitude: 21.028511, // Tọa độ Hà Nội
  longitude: 105.804817,
  speed: 0,
};

// 2. SỬA LỖI ICON CỦA LEAFLET
// Đoạn code này giờ sẽ nằm ngoài component
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl, // Sử dụng biến đã import
  iconUrl: iconUrl, // Sử dụng biến đã import
  shadowUrl: shadowUrl, // Sử dụng biến đã import
});

const LocationScreen = () => {
  const position = [dynamicData.latitude, dynamicData.longitude];

  return (
    <div className="location-screen">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            VinFast VF 8 <br /> Speed: {dynamicData.speed} km/h
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationScreen;
