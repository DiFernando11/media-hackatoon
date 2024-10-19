import React from "react";
import ButtonAction from "../../ButtonAction";
import useStoreApp from "../../hooks/useStoreApp";
import useTransformImage from "../../hooks/useTransformImage";

function UploadImage() {
  const { getCurrentImageUpload, getLoadingImageUpload } = useStoreApp();
  const { handleOpenWidget } = useTransformImage();
  const handleAction = () => handleOpenWidget();
  if (getCurrentImageUpload.id) return null;
  return (
    <ButtonAction
      isActive={getLoadingImageUpload}
      name={"Sube tu imagen"}
      handleAction={handleAction}
    />
  );
}

export default UploadImage;
