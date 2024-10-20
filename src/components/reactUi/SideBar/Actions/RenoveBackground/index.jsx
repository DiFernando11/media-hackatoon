import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";

function RenoveBackground({ setComponenteKey }) {
  const { getCurrentImageUpload } = useStoreApp();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={"Personaliza tu fondo"}
      isClickPass
      handleAction={() => setComponenteKey("renove-background-component")}
    />
  );
}

export default RenoveBackground;
