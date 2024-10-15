import React, { useState } from "react";
import "./HalloweenToggle.css"; // Asegúrate de incluir tus estilos aquí

const HalloweenToggle = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="btn"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
      <label htmlFor="btn">
        <span className="hidden thumb">
          <span
            className={`flex justify-center items-center rounded-full px-1 w-10 h-8 transition-colors duration-[2000] ${
              isChecked ? "bg-red-500" : "bg-black"
            }`}
          >
            <img className="w-7 h-7" src="/public/pumpkin.png" alt="Pumpkin" />
          </span>
        </span>
        {/* Aquí aplicamos 'scale-down' dependiendo del estado de 'isChecked' */}
        <span className={`arm-wrapper ${isChecked ? "" : "scale-down"}`}>
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
