import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";

function DownloadImage({ setComponenteKey }) {
  const { getCurrentImageEdit, getLoadingImageUpload, getCurrentImageUpload } =
    useStoreApp();

  if (
    (!getCurrentImageEdit.id || getLoadingImageUpload) &&
    !getCurrentImageUpload.isGalery
  )
    return null;

  return (
    <ButtonAction
      name={"Descargar imagen"}
      isClickPass
      handleAction={() => setComponenteKey("download-component")}
    />
  );
}

export default DownloadImage;
