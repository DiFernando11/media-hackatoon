import React, { useState } from "react";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import ButtonAction from "../../../ButtonAction";

function ActionRenoveBackground() {
  const { handleGetCdlImage } = useTransformImage();
  const { getSelectedTopic, getCurrentImageEdit, addImagesEditArray } =
    useStoreApp();

  const [promptsActives, setPromptsActives] = useState({});

  const handleAction = () => {
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
    if (getCurrentImageEdit?.id) {
      addImagesEditArray(getCurrentImageEdit);
    }
    handleGetCdlImage(body);

    // // borrar
    // setIsLoadingImageUpload(true);

    // setCurrentImageEdit({
    //   id: "edit image",
    //   url: null,
    // });
    // setSliderPosition(100);
    // setTimeout(() => {
    //   setCurrentImageEdit({
    //     id: "edit image",
    //     publicId: "difer-images/wi24y5mhgk28t3wzzk35",
    //     url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343060/difer-images/mjl1cujbtnwqztuudvxo.avif",
    //     body,
    //   });
    // }, 2000);
  };

  return (
    <>
      <p className="font-general text-xs text-center text-white">
        Personaliza tu fondo
      </p>
      <p className="text-[10px] text-white">
        Genera un background con la tematica seleccionada
      </p>
      <ButtonAction
        name={"Generar fondo"}
        handleAction={handleAction}
        isClickPass
      />
    </>
  );
}

export default ActionRenoveBackground;
