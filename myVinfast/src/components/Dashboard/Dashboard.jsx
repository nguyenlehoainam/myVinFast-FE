
import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import DashboardContent from "../DashboardContent/DashboardContent";
import ChargingScreen from "../Charging/Charging";
import ClimateScreen from "../Climate/Climate";
import LocationScreen from "../Location/Location";
import StatusPanel from "../StatusPanel/StatusPanel";
import MaintenanceScreen from "../Maintenance/MaintenanceScreen";
import SettingsScreen from "../Settings/SettingsScreen"; 

import "./Dashboard.scss";

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("Dashboard");
  const vehicleData = {
    battery: 85,
    range: 420,
  };
  const renderMainContent = () => {
    switch (activeScreen) {
      case "Charging":
        return <ChargingScreen />;
      case "Climate":
        return <ClimateScreen />;
      case "Location":
        return <LocationScreen />;
      case "Maintenance": 
        return <MaintenanceScreen />;
      case "Settings": 
        return <SettingsScreen />;
      case "Dashboard":
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div
      className={`dashboard-grid-layout ${
        activeScreen !== "Dashboard" ? "main-content-full-width" : ""
      }`}
    >
      <NavMenu activeItem={activeScreen} setActiveItem={setActiveScreen} />
      <main className="main-content">{renderMainContent()}</main>
      {activeScreen === "Dashboard" && (
        <StatusPanel vehicleData={vehicleData} />
      )}
    </div>
  );
};

export default Dashboard;
