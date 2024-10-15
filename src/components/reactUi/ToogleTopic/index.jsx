import React, { useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import { MODEL_TOPIC } from "../../../utils/constants";
import ToggleAction from "../ToogleAction";

const ToggleList = () => {
  const names = [
    { value: MODEL_TOPIC.skeleton },
    { value: MODEL_TOPIC.zombies },
    { value: MODEL_TOPIC.ghost },
    { value: MODEL_TOPIC.vampire },
    { value: MODEL_TOPIC.witch },
    { value: MODEL_TOPIC.werewolf },
    { value: MODEL_TOPIC.mummy },
    { value: MODEL_TOPIC.pumpkin },
    { value: MODEL_TOPIC.spider },
  ];
  const { setTopicHalloween, setOpenInitTopic, setDurationAnimation } =
    useStoreApp();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (value, index) => {
    setActiveIndex(index);
    setTimeout(() => setTopicHalloween(value), 800);
    setOpenInitTopic(true);
    setDurationAnimation("duration-[500ms]");
  };

  return (
    <div className="flex flex-wrap justify-center items-center max-w-xs mx-auto">
      {names.map((topic, index) => (
        <ToggleAction
          key={index}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(topic.value, index)}
        />
      ))}
    </div>
  );
};

export default ToggleList;
