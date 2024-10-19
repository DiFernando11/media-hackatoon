import React, { useState } from "react";
import DropDownAction from "../../DropDownAction";
import ButtonAction from "../../ButtonAction";
import useTransformImage from "../../hooks/useTransformImage";
import useStoreApp from "../../hooks/useStoreApp";

function DescargarImagen() {
  const [currentFormat, setCurrentFormat] = useState(null);
  const { handleDownloadImageByFormat, loadingDownload } = useTransformImage();
  const { getCurrentImageEdit, getLoadingImageUpload, getCurrentImageUpload } =
    useStoreApp();

  const formats = {
    jpg: "jpg",
    png: "png",
    webp: "webp",
  };

  const handleAction = (format) => {
    setCurrentFormat(format);
    handleDownloadImageByFormat(format);
  };

  const removeButton = (format) => loadingDownload && currentFormat === format;

  if (
    (!getCurrentImageEdit.id || getLoadingImageUpload) &&
    !getCurrentImageUpload.isGalery
  )
    return null;
  return (
    <DropDownAction name={"Descargar imagen"}>
      <ButtonAction
        name={". JPG"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.jpg)}
        removeButton={removeButton(formats.jpg)}
      />
      <ButtonAction
        name={". PNG"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.png)}
        removeButton={removeButton(formats.png)}
      />
      <ButtonAction
        name={". WEBP"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.webp)}
        removeButton={removeButton(formats.webp)}
      />
    </DropDownAction>
  );
}

export default DescargarImagen;
