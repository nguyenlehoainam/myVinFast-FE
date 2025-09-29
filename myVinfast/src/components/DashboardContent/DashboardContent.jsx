// src/components/DashboardContent/DashboardContent.jsx

import React from "react";
import CarModel from "../CarModel/CarModel";
import StatusPanel from "../StatusPanel/StatusPanel";
import "./DashboardContent.scss";

const DashboardContent = () => {
  // Dữ liệu xe giả lập, có thể truyền vào từ props nếu cần
  const vehicleData = {
    name: "VinFast VF 9",
    battery: 85,
    range: 420,
  };

  return (
    // Sử dụng Fragment <>...</> để bọc các component mà không cần thẻ div thừa
    <>
      <div className="car-model-wrapper">
        <CarModel />
      </div>

      <div className="vehicle-title">
        <h1>{vehicleData.name}</h1>
      </div>

      {/* Component StatusPanel giờ sẽ là một phần của layout grid,
        nên không cần đặt nó bên trong main-content nữa.
        Phần này sẽ được xử lý ở Dashboard.jsx
      */}
    </>
  );
};

export default DashboardContent;
