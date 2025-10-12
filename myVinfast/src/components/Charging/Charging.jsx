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
  chargingStatus: "Not charging",
  chargingPower: 0,
  chargingTimeRemaining: 15,
  batteryTemperature: 28,
  energyConsumption: 16.5,
};

const ChargingScreen = () => {
  return (
    <div className="charging-screen">
      <h1>Charging Status</h1>
      <div className="charging-grid">
        <InfoBlock
          className="grid-item-level"
          title="Battery Level"
          value={dynamicData.batteryLevel}
          unit="%"
          description={`Range remaining: ${dynamicData.rangeRemaining} km`}
          icon={<FaBolt />}
        />
        <InfoBlock
          className="grid-item-status"
          title="Charging Status"
          value={dynamicData.chargingStatus}
          description={`Power: ${dynamicData.chargingPower} kW`}
          icon={<FaBolt />}
        />
        <InfoBlock
          className="grid-item-time"
          title="Time Remaining"
          value={dynamicData.chargingTimeRemaining}
          unit="mins"
          description="Time to full charge"
          icon={<FaClock />}
        />
        <InfoBlock
          className="grid-item-temp"
          title="Battery Temperature"
          value={dynamicData.batteryTemperature}
          unit="°C"
          description="Optimal temperature"
          icon={<FaThermometerHalf />}
        />
        <InfoBlock
          className="grid-item-consumption"
          title="Energy Consumption"
          value={dynamicData.energyConsumption}
          unit="kWh/100km"
          description="Average consumption"
          icon={<FaTachometerAlt />}
        />
      </div>
    </div>
  );
};

export default ChargingScreen;
