// src/components/StatusPanel/StatusPanel.jsx

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
      <StatusWidget title="Battery Status">
        <div className="battery-info">
          <div className="battery-percentage">
            {vehicleData.battery}
            <span>%</span>
          </div>
          <div className="battery-details">
            <p>Ultimate Range: {vehicleData.range} km</p>
            <p>BEV: 6</p>
          </div>
        </div>
      </StatusWidget>

      <StatusWidget title="Climate Control">
        <div className="climate-info">
          <div className="climate-temp">
            25.0<span>mn</span>
          </div>
          <div className="climate-fan-icon">
            <FaFan />
          </div>
        </div>
      </StatusWidget>

      <StatusWidget title="Driving Statistics">
        <div className="driving-stats">
          <div className="stat-item">
            <div className="stat-value">175,340</div>
            <div className="stat-label">Average Speed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">82690</div>
            <div className="stat-label">Total Trip</div>
          </div>
        </div>
      </StatusWidget>
    </aside>
  );
};

export default StatusPanel;
