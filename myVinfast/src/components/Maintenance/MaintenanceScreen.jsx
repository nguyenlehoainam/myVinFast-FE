// src/components/Maintenance/MaintenanceScreen.jsx

import React from "react";
import "./MaintenanceScreen.scss";
import { GiCartwheel } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { TbDisc } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri"; // Icon an toàn
import { FaExclamationTriangle } from "react-icons/fa"; // Icon cảnh báo

// Import dữ liệu
import dynamicSpec from "../../../public/dynamic-spec.json";

// Hàm tiện ích để lấy dữ liệu
const getDynamicValue = (paramName, defaultValue = "N/A") => {
  for (const group of dynamicSpec.data) {
    const param = group.parameters.find((p) => p.paramName === paramName);
    if (param) {
      const value =
        param.numericValue !== null ? param.numericValue : param.stringValue;
      return value !== null ? value : defaultValue;
    }
  }
  return defaultValue;
};

// --- Component con ---

const SpecItem = ({ label, value, unit }) => (
  <div className="spec-item">
    <span className="spec-label">{label}</span>
    <span className="spec-value">
      {value} <span className="spec-unit">{unit}</span>
    </span>
  </div>
);

// Component con mới cho các mục cảnh báo (để có style riêng)
const AlertItem = ({ label, status }) => (
  <div className="spec-item">
    <span className="spec-label">{label}</span>
    <span className={`spec-value status-${String(status).toLowerCase()}`}>
      {status}
    </span>
  </div>
);

// --- Component chính ---

const MaintenanceScreen = () => {
  // Lấy tất cả các giá trị cần thiết
  const tirePressure = getDynamicValue("tirePressure", 0);
  const tireTemperature = getDynamicValue("tireTemperature", 0);
  const tpmsWarning = getDynamicValue("tpmsWarning", "Không");
  const motorTemperature = getDynamicValue("motorTemperature", 0);
  const coolantTemperature = getDynamicValue("coolantTemperature", 0);
  const batteryTemperature = getDynamicValue("batteryTemperature", 0);
  const brakePadWear = getDynamicValue("brakePadWear", 0);
  const brakeTemperature = getDynamicValue("brakeTemperature", 0);
  const airbagStatus = getDynamicValue("airbagStatus", "Lỗi");
  const odometer = getDynamicValue("odometer", 0);
  const checkEngine = getDynamicValue("checkEngine", "Off");
  const batteryFault = getDynamicValue("batteryFault", "Không");
  const brakeFault = getDynamicValue("brakeFault", "Không");

  return (
    <div className="maintenance-screen">
      <h1>Tình trạng xe</h1>

      <div className="maintenance-grid">
        {/* --- Khu vực Lốp xe --- */}
        <div className="status-card">
          <div className="card-header">
            <GiCartwheel />
            <h2>Lốp xe</h2>
          </div>
          <div className="card-body">
            <SpecItem label="Áp suất lốp TB" value={tirePressure} unit="psi" />
            <SpecItem
              label="Nhiệt độ lốp TB"
              value={tireTemperature}
              unit="°C"
            />
            <hr />
            <AlertItem label="Cảnh báo áp suất lốp" status={tpmsWarning} />
          </div>
        </div>

        {/* --- Khu vực Hệ thống truyền động --- */}
        <div className="status-card">
          <div className="card-header">
            <PiEngineFill />
            <h2>Hệ thống truyền động</h2>
          </div>
          <div className="card-body">
            <SpecItem
              label="Nhiệt độ động cơ"
              value={motorTemperature}
              unit="°C"
            />
            <SpecItem
              label="Nhiệt độ Pin"
              value={batteryTemperature}
              unit="°C"
            />
            <SpecItem
              label="Nhiệt độ nước làm mát"
              value={coolantTemperature}
              unit="°C"
            />
          </div>
        </div>

        {/* --- Khu vực Phanh --- */}
        <div className="status-card">
          <div className="card-header">
            <TbDisc />
            <h2>Hệ thống phanh</h2>
          </div>
          <div className="card-body">
            <SpecItem
              label="Độ mòn má phanh"
              value={`${brakePadWear}%`}
              unit="mòn"
            />
            <SpecItem
              label="Nhiệt độ phanh"
              value={brakeTemperature}
              unit="°C"
            />
          </div>
        </div>

        {/* --- Khu vực An toàn & Thông tin chung --- */}
        <div className="status-card">
          <div className="card-header">
            <RiShieldCheckLine />
            <h2>An toàn & Chung</h2>
          </div>
          <div className="card-body">
            <AlertItem label="Trạng thái túi khí" status={airbagStatus} />
            <hr />
            <SpecItem
              label="Tổng quãng đường"
              value={odometer.toLocaleString("vi-VN")}
              unit="km"
            />
          </div>
        </div>

        {/* --- Khu vực Cảnh báo Hệ thống --- */}
        <div className="status-card full-width">
          <div className="card-header">
            <FaExclamationTriangle />
            <h2>Cảnh báo Hệ thống</h2>
          </div>
          <div className="card-body alert-grid">
            <AlertItem label="Lỗi động cơ" status={checkEngine} />
            <AlertItem label="Lỗi pin" status={batteryFault} />
            <AlertItem label="Lỗi phanh" status={brakeFault} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceScreen;
