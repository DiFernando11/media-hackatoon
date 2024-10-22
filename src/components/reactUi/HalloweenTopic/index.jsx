import React from "react";
import "./HalloweenToggle.css"; // Asegúrate de incluir tus estilos aquí

const HalloweenToggle = ({ isActive, onToggle }) => {
  return (
    <div >
      <input
        type="checkbox"
        id="btn"
        checked={isActive}
        onChange={onToggle}
      />
      <label htmlFor="btn">
        <span className="hidden thumb">
          <span
            className={`flex justify-center items-center rounded-full px-1 w-10 h-8 transition-colors duration-[2000] ${
              isActive ? "bg-red-500" : "bg-black"
            }`}
          >
            <img className="w-7 h-7" src="/pumpkin.png" alt="Pumpkin" />
          </span>
        </span>
        <span className={`arm-wrapper ${isActive ? "" : "scale-down"}`}>
          <span className="arm">
            <span className="bone"></span>
            <span className="bone"></span>
            <span className="hand">
              <span className="bone"></span>
              <span className="bone"></span>
              <span className="bone"></span>
              <span className="bone"></span>
            </span>
            <span className="big"></span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default HalloweenToggle;
