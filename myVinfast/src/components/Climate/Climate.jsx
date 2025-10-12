import React, { useState } from "react";
import InfoBlock from "../Shared/InfoBlock";
import "./Climate.scss";
import {
  FaThermometerHalf,
  FaFan,
  FaPowerOff,
  FaMinus,
  FaPlus,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { LuWind } from "react-icons/lu";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";

const ControlButton = ({ icon, label, onClick, isActive }) => (
  <button
    className={`control-button ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const StepperControl = ({ label, value, unit, onDecrease, onIncrease }) => (
  <div className="stepper-control">
    <span className="stepper-label">{label}</span>
    <div className="stepper-body">
      <button onClick={onDecrease}>
        <FaMinus />
      </button>
      <span className="stepper-value">
        {value}
        {unit}
      </span>
      <button onClick={onIncrease}>
        <FaPlus />
      </button>
    </div>
  </div>
);

const ClimateScreen = () => {
  const [isAcOn, setIsAcOn] = useState(true);
  const [temperature, setTemperature] = useState(22);
  const [fanSpeed, setFanSpeed] = useState(2);
  const [activeAirflow, setActiveAirflow] = useState("face");
  const [isSeatHeatingOn, setIsSeatHeatingOn] = useState(false);
  const [isRecirculationOn, setIsRecirculationOn] = useState(true);

  return (
    <div className="climate-screen">
      <h1>Climate Control</h1>
      <div className="climate-status-grid">
        <InfoBlock
          title="Cabin Temperature"
          value={temperature}
          unit="°C"
          icon={<FaThermometerHalf />}
        />
        <InfoBlock
          title="Fan Speed"
          value={fanSpeed}
          unit=""
          description={`Level ${fanSpeed} of 5`}
          icon={
            <FaFan className={fanSpeed > 0 && isAcOn ? "fan-spinning" : ""} />
          }
        />
        <InfoBlock
          title="AC Status"
          value={isAcOn ? "On" : "Off"}
          icon={<FaPowerOff />}
        />
      </div>
      <div className="controls-wrapper">
        <StepperControl
          label="Temperature"
          value={temperature}
          unit="°C"
          onDecrease={() => setTemperature((temp) => Math.max(16, temp - 1))}
          onIncrease={() => setTemperature((temp) => Math.min(30, temp + 1))}
        />
        <StepperControl
          label="Fan Speed"
          value={fanSpeed}
          onDecrease={() => setFanSpeed((speed) => Math.max(1, speed - 1))}
          onIncrease={() => setFanSpeed((speed) => Math.min(5, speed + 1))}
        />

        <div className="toggle-controls-grid">
          <ControlButton
            icon={<FaArrowUp />}
            label="Face"
            isActive={activeAirflow === "face"}
            onClick={() => setActiveAirflow("face")}
          />
          <ControlButton
            icon={<FaArrowDown />}
            label="Feet"
            isActive={activeAirflow === "feet"}
            onClick={() => setActiveAirflow("feet")}
          />
          <ControlButton
            icon={<MdOutlineAirlineSeatReclineNormal />}
            label="Seat Heat"
            onClick={() => setIsSeatHeatingOn(!isSeatHeatingOn)}
            isActive={isSeatHeatingOn}
          />
          <ControlButton
            icon={<LuWind />}
            label="Recirculate"
            onClick={() => setIsRecirculationOn(!isRecirculationOn)}
            isActive={isRecirculationOn}
          />
          <ControlButton
            icon={<FaPowerOff />}
            label={isAcOn ? "Turn Off" : "Turn On"}
            onClick={() => setIsAcOn(!isAcOn)}
            isActive={isAcOn}
          />
        </div>
      </div>
    </div>
  );
};

export default ClimateScreen;
