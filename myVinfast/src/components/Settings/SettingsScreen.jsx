// src/components/Settings/SettingsScreen.jsx

import React, { useState } from "react";
import "./SettingsScreen.scss";
import { FaChevronDown } from "react-icons/fa";

// --- Component con ---

// Component cho một mục cài đặt có nút bật/tắt (Toggle)
const ToggleSetting = ({ label, description, isEnabled, onToggle }) => (
  <div className="setting-item">
    <div className="setting-info">
      <span className="setting-label">{label}</span>
      <span className="setting-description">{description}</span>
    </div>
    <div className="setting-control">
      <label className="toggle-switch">
        <input type="checkbox" checked={isEnabled} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </div>
  </div>
);

// Component cho một mục cài đặt có lựa chọn (Dropdown)
const SelectSetting = ({
  label,
  description,
  options,
  selectedValue,
  onSelect,
}) => (
  <div className="setting-item">
    <div className="setting-info">
      <span className="setting-label">{label}</span>
      <span className="setting-description">{description}</span>
    </div>
    <div className="setting-control">
      <div className="select-dropdown">
        <select
          value={selectedValue}
          onChange={(e) => onSelect(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FaChevronDown className="dropdown-icon" />
      </div>
    </div>
  </div>
);

// --- Component chính ---

const SettingsScreen = () => {
  // Quản lý trạng thái cho các cài đặt
  const [units, setUnits] = useState({
    temperature: "C", // 'C' or 'F'
    pressure: "psi", // 'psi' or 'bar'
    distance: "km", // 'km' or 'miles'
  });

  const [adas, setAdas] = useState({
    laneAssist: true,
    adaptiveCruise: true,
    blindSpot: false,
    autoHighBeam: true,
  });

  const handleUnitChange = (key, value) => {
    setUnits((prev) => ({ ...prev, [key]: value }));
  };

  const handleAdasToggle = (key) => {
    setAdas((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-screen">
      <h1>Cài đặt</h1>

      <div className="settings-section">
        <h2>Đơn vị</h2>
        <SelectSetting
          label="Nhiệt độ"
          description=""
          options={[
            { value: "C", label: "Độ C (°C)" },
            { value: "F", label: "Độ F (°F)" },
          ]}
          selectedValue={units.temperature}
          onSelect={(value) => handleUnitChange("temperature", value)}
        />
        <SelectSetting
          label="Áp suất lốp"
          description=""
          options={[
            { value: "psi", label: "PSI" },
            { value: "bar", label: "Bar" },
          ]}
          selectedValue={units.pressure}
          onSelect={(value) => handleUnitChange("pressure", value)}
        />
      </div>

      <div className="settings-section">
        <h2>ADAS (Hệ thống hỗ trợ lái xe nâng cao)</h2>
        <ToggleSetting
          label="Hỗ trợ giữ làn"
          description="Giúp giữ xe đi giữa làn đường"
          isEnabled={adas.laneAssist}
          onToggle={() => handleAdasToggle("laneAssist")}
        />
        <ToggleSetting
          label="Kiểm soát hành trình thích ứng"
          description="Tự động điều chỉnh tốc độ để giữ khoảng cách an toàn"
          isEnabled={adas.adaptiveCruise}
          onToggle={() => handleAdasToggle("adaptiveCruise")}
        />
        <ToggleSetting
          label="Phát hiện điểm mù"
          description="Cảnh báo có phương tiện trong điểm mù của bạn"
          isEnabled={adas.blindSpot}
          onToggle={() => handleAdasToggle("blindSpot")}
        />
        <ToggleSetting
          label="Đèn pha tự động"
          description="Tự động chuyển đèn pha/cốt khi có xe ngược chiều"
          isEnabled={adas.autoHighBeam}
          onToggle={() => handleAdasToggle("autoHighBeam")}
        />
      </div>
    </div>
  );
};

export default SettingsScreen;
