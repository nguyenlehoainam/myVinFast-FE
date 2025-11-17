
import React from "react";
import "./InfoBlock.scss";

const InfoBlock = ({ title, value, unit, description, icon, className }) => {
  return (
    <div className={`info-block ${className || ""}`}>
      <div className="info-block-header">
        {icon && <div className="info-block-icon">{icon}</div>}
        <span className="info-block-title">{title}</span>
      </div>
      <div className="info-block-body">
        <span className="info-block-value">{value}</span>
        {unit && <span className="info-block-unit">{unit}</span>}
      </div>
      {description && <p className="info-block-description">{description}</p>}
    </div>
  );
};

export default InfoBlock;
