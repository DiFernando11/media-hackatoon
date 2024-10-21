import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";

function DownloadImage({ setComponenteKey, componenteKey }) {
  const { getCurrentImageEdit, getLoadingImageUpload, getCurrentImageUpload } =
    useStoreApp();

  const isCurrentImageEdit =
    (!getCurrentImageEdit.id || getLoadingImageUpload) &&
    !getCurrentImageUpload.isGalery;

  if (isCurrentImageEdit || componenteKey === "download-component") return null;

  return (
    <ButtonAction
      name={"Descargar imagen"}
      isClickPass
      handleAction={() => setComponenteKey("download-component")}
    />
  );
}

export default DownloadImage;
