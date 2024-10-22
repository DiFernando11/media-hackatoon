import React, { useEffect, useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import { isMdMQ, MODEL_TOPIC } from "../../../utils/constants";
import ToggleAction from "../ToogleAction";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";

const ToggleList = () => {
  const { t } = useTranslation();
  const names = [
    { value: MODEL_TOPIC.skeleton, text: t("Calavera") },
    { value: MODEL_TOPIC.zombies, text: t("Zombie") },
    { value: MODEL_TOPIC.ghost, text: t("Fantasma") },
    { value: MODEL_TOPIC.vampire, text: t("Vampiro") },
    { value: MODEL_TOPIC.witch, text: t("Bruja") },
    { value: MODEL_TOPIC.werewolf, text: t("Lobo") },
    { value: MODEL_TOPIC.mummy, text: t("Momia") },
    { value: MODEL_TOPIC.pumpkin, text: t("Calabaza") },
    { value: MODEL_TOPIC.spider, text: t("Araña") },
  ];
  const { setCurrentTopicByLS, getCurrentOlnyNameTopicByLS } =
    useLocalStorage();
  const {
    setTopicHalloween,
    setOpenInitTopic,
    getCurrentImageEdit,
    addImagesEditArray,
    setCurrentImageEdit,
    setSliderPosition,
    setOpenActionMedia,
    setCurrentComponentKey,
  } = useStoreApp();

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const lsTopic = getCurrentOlnyNameTopicByLS();
    const currentModel = lsTopic || MODEL_TOPIC.skeleton;
    setActiveIndex(currentModel);
    setTopicHalloween(currentModel);
  }, []);

  const handleToggle = (value) => {
    setActiveIndex(value);
    const screenWidth = window.innerWidth;
    setOpenActionMedia(!isMdMQ(screenWidth));
    setTopicHalloween(value);
    setCurrentTopicByLS(value);
    setCurrentComponentKey(null);
    if (getCurrentImageEdit?.id) {
      addImagesEditArray(getCurrentImageEdit);
      setCurrentImageEdit({});
      setSliderPosition(1);
    }
    setOpenInitTopic(true);
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
    </div>
  );
};

export default ToggleList;
