import React from "react";
import useTransformImage from "../../hooks/useTransformImage";
import ButtonAction from "../../ButtonAction";
import useStoreApp from "../../hooks/useStoreApp";

function RenuevaFondo({ active, handleToggle }) {
  const { handleGetCdlImage } = useTransformImage();
  const { getSelectedTopic } = useStoreApp();
  const name = "renueva-fondo";
  return (
    <ButtonAction
      isActive={active === name}
      name={"Renueva tu fondo"}
      handleAction={() => {
        console.log("Hizo la renovacion");
        handleToggle(name);
        const currentTopic = getSelectedTopic();
        const body = {
          replaceBackground: currentTopic.replaceBackground,
        };
        handleGetCdlImage(body);
      }}
    />
  );
}

export default RenuevaFondo;
