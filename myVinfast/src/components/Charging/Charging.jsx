import React from "react";
import InfoBlock from "../Shared/InfoBlock";
import "./Charging.scss";
import {
  FaBolt,
  FaThermometerHalf,
  FaClock,
  FaTachometerAlt,
} from "react-icons/fa";

const dynamicData = {
  batteryLevel: 85,
  rangeRemaining: 420,
  chargingStatus: "Không sạc",
  chargingPower: 0,
  chargingTimeRemaining: 15,
  batteryTemperature: 28,
  energyConsumption: 16.5,
};

const ChargingScreen = () => {
  return (
    <div className="charging-screen">
      <h1>Tình trạng sạc</h1>
      <div className="charging-grid">
        <InfoBlock
          className="grid-item-level"
          title="Mức pin"
          value={dynamicData.batteryLevel}
          unit="%"
          description={`Quãng đường còn lại: ${dynamicData.rangeRemaining} km`}
          icon={<FaBolt />}
        />
        <InfoBlock
          className="grid-item-status"
          title="Trạng thái sạc"
          value={dynamicData.chargingStatus}
          description={`Công suất: ${dynamicData.chargingPower} kW`}
          icon={<FaBolt />}
        />
        <InfoBlock
          className="grid-item-time"
          title="Thời gian còn lại"
          value={dynamicData.chargingTimeRemaining}
          unit="phút"
          description="Thời gian để sạc đầy"
          icon={<FaClock />}
        />
        <InfoBlock
          className="grid-item-temp"
          title="Nhiệt độ pin"
          value={dynamicData.batteryTemperature}
          unit="°C"
          description="Nhiệt độ tối ưu"
          icon={<FaThermometerHalf />}
        />
        <InfoBlock
          className="grid-item-consumption"
          title="Mức tiêu thụ năng lượng"
          value={dynamicData.energyConsumption}
          unit="kWh/100km"
          description="Mức tiêu thụ trung bình"
          icon={<FaTachometerAlt />}
        />
      </div>
    </div>
  );
};

export default ChargingScreen;
