import React from "react";
import { modelByTopic } from "../../../utils";

const ToggleAction = ({ isActive, onToggle, topic, text }) => {
  const currentTopic = modelByTopic(topic);

  return (
    <div className="flex flex-col items-center text-[16px] font-general-md">
      <span className="text-white text-start">{text}</span>
      <div
        className={`relative w-16 h-8 border rounded-full cursor-pointer transition-all duration-1000`}
        onClick={onToggle}
        style={{
          borderColor: isActive ? "white" : currentTopic.bgColor.secondary,
          backgroundColor: isActive ? currentTopic.bgColor.secondary : "black",
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div
          className={`border absolute top-0 left-1 w-8 h-8 rounded-full flex justify-center items-center`}
          style={{
            backgroundColor: isActive
              ? currentTopic.bgColor.secondary
              : currentTopic.bgColor.secondary,
            transform: isActive ? "translateX(28px)" : "translateX(-3.5px)",
            transition:
              "transform 0.5s ease-in-out, background-color 0.3s ease",
          }}
        >
          <img src={currentTopic.bgImage} className="rounded-full" alt="pumpkin" />
        </div>
      </div>
    </div>
  );
};

export default ToggleAction;
