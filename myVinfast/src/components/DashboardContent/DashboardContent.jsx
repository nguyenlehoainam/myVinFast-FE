
import React from "react";
import CarModel from "../CarModel/CarModel";
import StatusPanel from "../StatusPanel/StatusPanel";
import "./DashboardContent.scss";

const DashboardContent = () => {
  const vehicleData = {
    name: "VinFast VF 9",
    battery: 85,
    range: 420,
  };

  return (
    <>
      <div className="car-model-wrapper">
        <CarModel />
      </div>

      <div className="vehicle-title">
        <h1>{vehicleData.name}</h1>
      </div>
    </>
  );
};

export default DashboardContent;
