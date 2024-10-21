import React from "react";
import useStoreApp from "../../../hooks/useStoreApp";
import ButtonAction from "../../../ButtonAction";

function AddBackroundImage({ setComponenteKey }) {
  const { getCurrentImageUpload } = useStoreApp();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={"Agrega una imagen de fondo"}
      isClickPass
      handleAction={() => setComponenteKey("add-background-component")}
    />
  );
}

export default AddBackroundImage;
