// Toggle.jsx
import React from "react";

const ToggleAction = ({ isActive, onToggle }) => {
  return (
    <div className="flex items-center">
      <div
        className={`relative w-16 h-8 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 ${
          isActive ? "bg-gray-600" : ""
        }`}
        onClick={onToggle}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
            isActive ? "transform translate-x-8 bg-black" : "bg-white"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleAction;
