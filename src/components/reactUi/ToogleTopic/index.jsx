import React, { useEffect, useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import { MODEL_TOPIC } from "../../../utils/constants";
import ToggleAction from "../ToogleAction";
import HalloweenToggle from "../HalloweenTopic";
import useLocalStorage from "../hooks/useLocalStorage";

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
  const { setCurrentTopicByLS, getCurrentOlnyNameTopicByLS } =
    useLocalStorage();
  const {
    setTopicHalloween,
    setOpenInitTopic,
    setDurationAnimation,
    setDurationAnimationClose,
    getCurrentImageEdit,
    addImagesEditArray,
    setCurrentImageEdit,
    setSliderPosition
  } = useStoreApp();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const lsTopic = getCurrentOlnyNameTopicByLS();
    const currentModel = lsTopic || MODEL_TOPIC.skeleton;
    console.log({ currentModel });
    setActiveIndex(currentModel);
    setTopicHalloween(currentModel);
  }, []);

  const handleToggle = (value) => {
    setActiveIndex(value);
    setTimeout(() => {
      setTopicHalloween(value);
      setCurrentTopicByLS(value);
      if (getCurrentImageEdit?.id) {
        addImagesEditArray(getCurrentImageEdit);
        setCurrentImageEdit({});
        setSliderPosition(100);
      }
    }, 400);
    setOpenInitTopic(true);
    setDurationAnimation("duration-[400ms]");
    setDurationAnimationClose(500);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between items-center max-w-xs mx-auto">
      {names.map((topic, index) => (
        <ToggleAction
          key={index}
          isActive={activeIndex === topic.value}
          topic={topic.value}
          text={topic.text}
          onToggle={() => handleToggle(topic.value)}
        />
      ))}
      {/* <HalloweenToggle/> */}
    </div>
  );
};

export default ToggleList;
