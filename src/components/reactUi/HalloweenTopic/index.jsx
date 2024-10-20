import React from "react";
import "./HalloweenToggle.css"; // Asegúrate de incluir tus estilos aquí

const HalloweenToggle = ({ isActive, onToggle }) => {
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="btn"
        checked={isActive} // Está chequeado solo si está activo
        onChange={onToggle} // Llama a la función que viene del padre
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
