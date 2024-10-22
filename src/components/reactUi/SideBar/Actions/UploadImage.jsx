import React from "react";
import ButtonAction from "../../ButtonAction";
import useStoreApp from "../../hooks/useStoreApp";
import useTransformImage from "../../hooks/useTransformImage";
import { useTranslation } from "react-i18next";

function UploadImage() {
  const { getCurrentImageUpload, getLoadingImageUpload } = useStoreApp();
  const { t } = useTranslation();
  const { handleOpenWidget } = useTransformImage();
  const handleAction = () => handleOpenWidget();
  if (getCurrentImageUpload.id) return null;
  return (
    <ButtonAction
      isActive={getLoadingImageUpload}
      name={t("ulploadImage")}
      handleAction={handleAction}
    />
  );
}

export default UploadImage;
