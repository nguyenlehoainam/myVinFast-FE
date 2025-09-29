// src/components/NavMenu/NavMenu.jsx

import React from "react"; // Bỏ useState vì không cần nữa
import "./NavMenu.scss";
import {
  FaTachometerAlt,
  FaChargingStation,
  FaWind,
  FaMapMarkerAlt,
  FaTools,
  FaCog,
} from "react-icons/fa";

// Component MenuItem không thay đổi
const MenuItem = ({ icon, label, active, onClick }) => (
  <button className={`menu-item ${active ? "active" : ""}`} onClick={onClick}>
    {icon}
    <span>{label}</span>
  </button>
);

// 1. NHẬN PROPS TỪ COMPONENT CHA (DASHBOARD)
const NavMenu = ({ activeItem, setActiveItem }) => {
  // 2. XÓA BỎ STATE RIÊNG CỦA NAVMENU
  // const [activeItem, setActiveItem] = useState('Dashboard'); // <-- XÓA DÒNG NÀY

  const menuItems = [
    { id: "Dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    { id: "Charging", icon: <FaChargingStation />, label: "Charging" },
    { id: "Climate", icon: <FaWind />, label: "Climate" },
    { id: "Location", icon: <FaMapMarkerAlt />, label: "Location" },
    { id: "Maintenance", icon: <FaTools />, label: "Maintenance" },
    { id: "Settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <nav className="nav-menu-container">
      <div className="logo-container">
        <img src="/vinfast.png" alt="VinFast Logo" />
      </div>
      <div className="menu-items-list">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            // 3. SỬ DỤNG PROPS ĐỂ XÁC ĐỊNH TRẠNG THÁI ACTIVE
            active={activeItem === item.id}
            // 4. KHI CLICK, GỌI HÀM CỦA COMPONENT CHA
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
