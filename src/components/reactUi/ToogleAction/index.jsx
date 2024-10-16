import React from "react";
import { modelByTopic } from "../../../utils";

const ToggleAction = ({ isActive, onToggle, topic, text }) => {
  const currentTopic = modelByTopic(topic);

  return (
    <div className="flex flex-col items-center text-[8px]">
      <span className="text-white text-start">{text}</span>
      <div
        className={`relative w-12 h-7 border rounded-full cursor-pointer transition-all duration-1000`}
        onClick={onToggle}
        style={{
          borderColor: isActive ? "white" : currentTopic.bgColor.secondary,
          backgroundColor: isActive ? currentTopic.bgColor.secondary : "black",
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div
          className={`border absolute top-0.5 left-1 w-6 h-6 rounded-full flex justify-center items-center`}
          style={{
            backgroundColor: isActive
              ? currentTopic.bgColor.secondary
              : currentTopic.bgColor.secondary,
            transform: isActive ? "translateX(20px)" : "translateX(-3.5px)",
            transition:
              "transform 0.5s ease-in-out, background-color 0.3s ease",
          }}
        >
          <img src={currentTopic.bgImage} alt="pumpkin" />
        </div>
      </div>
    </div>
  );
};

export default ToggleAction;
