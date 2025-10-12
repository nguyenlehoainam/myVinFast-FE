// src/components/Dashboard/Dashboard.jsx

import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import DashboardContent from "../DashboardContent/DashboardContent";
import ChargingScreen from "../Charging/Charging";
import ClimateScreen from "../Climate/Climate";
import LocationScreen from "../Location/Location";
import StatusPanel from "../StatusPanel/StatusPanel";
import "./Dashboard.scss";

const Dashboard = () => {
  // State để quản lý màn hình đang hoạt động
  const [activeScreen, setActiveScreen] = useState("Dashboard");

  // Dữ liệu xe giả lập để truyền cho StatusPanel
  const vehicleData = {
    battery: 85,
    range: 420,
  };

  // Hàm để render màn hình tương ứng
  const renderMainContent = () => {
    switch (activeScreen) {
      case "Charging":
        return <ChargingScreen />;
      case "Climate":
        return <ClimateScreen />;
      case "Location":
        return <LocationScreen />;
      // Thêm các case khác cho Maintenance, Settings...
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
      {/* NavMenu nhận state và hàm cập nhật state để điều khiển */}
      <NavMenu activeItem={activeScreen} setActiveItem={setActiveScreen} />

      {/* Khu vực nội dung chính, sẽ thay đổi tùy theo state */}
      <main className="main-content">{renderMainContent()}</main>

      {/* StatusPanel được đặt ở đây để nó luôn hiển thị cùng với layout grid,
        nhưng chúng ta có thể ẩn nó đi nếu không ở màn hình Dashboard.
      */}
      {activeScreen === "Dashboard" && (
        <StatusPanel vehicleData={vehicleData} />
      )}
    </div>
  );
};

export default Dashboard;
