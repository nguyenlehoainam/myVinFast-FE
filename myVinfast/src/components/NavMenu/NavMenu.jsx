

import React from "react";
import "./NavMenu.scss";
import {
  FaTachometerAlt,
  FaChargingStation,
  FaWind,
  FaMapMarkerAlt,
  FaTools,
  FaCog,
} from "react-icons/fa";
const MenuItem = ({ icon, label, active, onClick }) => (
  <button className={`menu-item ${active ? "active" : ""}`} onClick={onClick}>
    {icon}
    <span>{label}</span>
  </button>
);

const NavMenu = ({ activeItem, setActiveItem }) => {
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
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
