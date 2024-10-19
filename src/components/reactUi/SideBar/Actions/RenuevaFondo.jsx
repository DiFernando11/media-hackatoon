import React, { useState } from "react";
import useTransformImage from "../../hooks/useTransformImage";
import ButtonAction from "../../ButtonAction";
import useStoreApp from "../../hooks/useStoreApp";

function RenuevaFondo({ active, handleToggle }) {
  const { handleGetCdlImage } = useTransformImage();
  const { getSelectedTopic, getCurrentImageEdit, addImagesEditArray } =
    useStoreApp();
  console.log({ getSelectedTopic: getSelectedTopic() });
  const [promptsActives, setPromptsActives] = useState({});

  console.log({ promptsActives });
  const handleAction = () => {
    console.log("Hizo la renovacion");
    handleToggle(name);
    const currentTopic = getSelectedTopic();
    const existedTopic = promptsActives[currentTopic.name] || undefined;
    const cantPropmts = Object.keys(currentTopic.replaceBackground).length;

    const countPropmt = cantPropmts === existedTopic ? 1 : existedTopic + 1;
    const currentPromt = existedTopic ? countPropmt : 1;

    setPromptsActives({
      ...promptsActives,
      [currentTopic.name]: existedTopic ? countPropmt : 1,
    });

    const body = {
      replaceBackground:
        currentTopic.replaceBackground[`prompt-${currentPromt}`],
    };
    console.log({
      body,
      replaceBackground: currentTopic.replaceBackground,
      prompt: currentTopic.replaceBackground[`prompt-${currentPromt}`],
    });
    if (getCurrentImageEdit?.id) {
      addImagesEditArray(getCurrentImageEdit);
    }
    handleGetCdlImage(body);
  };
  const name = "renueva-fondo";
  return (
    <ButtonAction
      isActive={active === name}
      name={"Renueva tu fondo"}
      handleAction={handleAction}
    />
  );
}

export default RenuevaFondo;
