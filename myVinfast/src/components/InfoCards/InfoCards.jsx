
import React from "react";
import "./InfoCards.scss";

const InfoCard = ({ value, unit, label }) => (
  <div className="info-card">
    <div className="card-value">
      {value}
      <span>{unit}</span>
    </div>
    <div className="card-label">{label}</div>
  </div>
);

const InfoCards = ({ vehicleData }) => {
  return (
    <div className="info-cards-wrapper">
      <InfoCard value={vehicleData.battery} unit="%" label="Pin" />
      <InfoCard value={vehicleData.range} unit="km" label="Quãng đường" />
      <InfoCard value={vehicleData.status} unit="" label="Trạng thái" />
    </div>
  );
};

export default InfoCards;
