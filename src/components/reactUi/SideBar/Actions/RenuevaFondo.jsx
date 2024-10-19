import React, { useState } from "react";
import useTransformImage from "../../hooks/useTransformImage";
import ButtonAction from "../../ButtonAction";
import useStoreApp from "../../hooks/useStoreApp";

function RenuevaFondo({ active, handleToggle }) {
  const { handleGetCdlImage } = useTransformImage();
  const {
    getSelectedTopic,
    getCurrentImageEdit,
    addImagesEditArray,
    setIsLoadingImageUpload,
    setCurrentImageEdit,
    getCurrentImageUpload,
    setSliderPosition
  } = useStoreApp();

  const [promptsActives, setPromptsActives] = useState({});

  const handleAction = () => {
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
    if (getCurrentImageEdit?.id) {
      addImagesEditArray(getCurrentImageEdit);
    }
    // handleGetCdlImage(body);

    // // borrar
    setIsLoadingImageUpload(true);

    setCurrentImageEdit({
      id: "edit image",
      url: null,
    });
    setSliderPosition(100);
    setTimeout(() => {
      setCurrentImageEdit({
        id: "edit image",
        publicId: "difer-images/wi24y5mhgk28t3wzzk35",
        url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343060/difer-images/mjl1cujbtnwqztuudvxo.avif",
        body,
      });
    }, 2000);
  };
  const name = "renueva-fondo";
  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;
  return (
    <ButtonAction
      name={"Renueva tu fondo"}
      handleAction={handleAction}
      isClickPass
    />
  );
}

export default RenuevaFondo;
