import React from "react";
import "./StatusPanel.scss";
import { FaFan } from "react-icons/fa";

const StatusWidget = ({ title, children }) => (
  <div className="status-widget">
    <div className="widget-header">{title}</div>
    <div className="widget-content">{children}</div>
  </div>
);

const StatusPanel = ({ vehicleData }) => {
  return (
    <aside className="status-panel-container">
      <StatusWidget title="Trạng thái Pin">
        <div className="battery-info">
          <div className="battery-percentage">
            {vehicleData.battery}
            <span>%</span>
          </div>
          <div className="battery-details">
            <p>Phạm vi tối đa: {vehicleData.range} km</p>
            <p>BEV: 6</p>
          </div>
        </div>
      </StatusWidget>

      <StatusWidget title="Điều hòa">
        <div className="climate-info">
          <div className="climate-temp">
            25.0<span>mn</span>
          </div>
          <div className="climate-fan-icon">
            <FaFan />
          </div>
        </div>
      </StatusWidget>

      <StatusWidget title="Thống kê Lái xe">
        <div className="driving-stats">
          <div className="stat-item">
            <div className="stat-value">175,340</div>
            <div className="stat-label">Tốc độ Trung bình</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">82690</div>
            <div className="stat-label">Tổng Hành trình</div>
          </div>
        </div>
      </StatusWidget>
    </aside>
  );
};

export default StatusPanel;
