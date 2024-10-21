import React, { useState } from "react";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import ButtonAction from "../../../ButtonAction";
import GenerateBgPersonalizate from "./GenerateBgPersonalizate";

function ActionRenoveBackground() {
  const { handleGetCdlImage } = useTransformImage();
  const {
    getSelectedTopic,
    getCurrentImageEdit,
    addImagesEditArray,
    setIsLoadingImageUpload,
    setSliderPosition,
    setCurrentImageEdit,
  } = useStoreApp();
  const currentTopic = getSelectedTopic();
  const [promptsActives, setPromptsActives] = useState({});

  const handleAction = () => {
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

    handleGetCdlImage(body);
  };

  return (
    <>
      <p className="font-general-md -text-xs-1 leading-5 text-white">
        Nuestra IA generara un fondo acorde a tu preferencia.
      </p>
      <ButtonAction
        name={"Generar fondo"}
        handleAction={handleAction}
        isClickPass
      />
      <GenerateBgPersonalizate />
    </>
  );
}

export default ActionRenoveBackground;
