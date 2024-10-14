import React, { useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import { MODEL_TOPIC } from "../../../utils/constants";

const Toggle = ({ name, isActive, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-12 text-xs h-6 flex items-center justify-center m-1 cursor-pointer rounded-md transition-colors 
                        ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "bg-gray-400 text-gray-200"
                        }`}
    >
      {name}
    </div>
  );
};

const ToggleList = () => {
  const names = [
    { text: "Leto", value: MODEL_TOPIC.skeleton },
    { text: "Zombie", value: MODEL_TOPIC.zombies },
    { text: "Ghost", value: MODEL_TOPIC.ghost },
    { text: "Vampiro", value: MODEL_TOPIC.vampire },
    { text: "Brujas", value: MODEL_TOPIC.witch },
    { text: "Lobo", value: MODEL_TOPIC.werewolf },
    { text: "Momia", value: MODEL_TOPIC.mummy },
    { text: "Calabaza", value: MODEL_TOPIC.pumpkin },
    { text: "Spider", value: MODEL_TOPIC.spider },
  ];
  const { setTopicHalloween, getTopicHalloween } = useStoreApp();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index, value) => {
    setActiveIndex(index);
    setTopicHalloween(value);
  };

  return (
    <div className="flex flex-wrap justify-center items-center max-w-xs mx-auto">
      {names.map((topic, index) => (
        <Toggle
          key={index}
          name={topic.text}
          isActive={index === activeIndex}
          onToggle={() => handleToggle(index, topic.value)}
        />
      ))}
    </div>
  );
};

export default ToggleList;
