import React, { useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import { MODEL_TOPIC } from "../../../utils/constants";
import ToggleAction from "../ToogleAction";
import HalloweenToggle from "../HalloweenTopic";

const ToggleList = () => {
  const names = [
    { value: MODEL_TOPIC.skeleton, text: "Calavera" },
    { value: MODEL_TOPIC.zombies, text: "Zombie" },
    { value: MODEL_TOPIC.ghost, text: "Fantasma" },
    { value: MODEL_TOPIC.vampire, text: "Vampiro" },
    { value: MODEL_TOPIC.witch, text: "Bruja" },
    { value: MODEL_TOPIC.werewolf, text: "Lobo" },
    { value: MODEL_TOPIC.mummy, text: "Momia" },
    { value: MODEL_TOPIC.pumpkin, text: "Calabaza" },
    { value: MODEL_TOPIC.spider, text: "Araña" },
  ];
  const {
    setTopicHalloween,
    setOpenInitTopic,
    setDurationAnimation,
    setDurationAnimationClose,
  } = useStoreApp();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (value, index) => {
    setActiveIndex(index);
    // setTimeout(() => setTopicHalloween(value), 0);
    setTimeout(() => setTopicHalloween(value), 400);
    setOpenInitTopic(true);
    setDurationAnimation("duration-[400ms]");
    setDurationAnimationClose(500);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between items-center max-w-xs mx-auto">
      {names.map((topic, index) => (
        <ToggleAction
          key={index}
          isActive={activeIndex === index}
          topic={topic.value}
          text={topic.text}
          onToggle={() => handleToggle(topic.value, index)}
        />
      ))}
      {/* <HalloweenToggle/> */}
    </div>
  );
};

export default ToggleList;
