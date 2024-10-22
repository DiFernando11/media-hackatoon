import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function DownloadImage({ setComponenteKey }) {
  const { getCurrentImageEdit, getLoadingImageUpload, getCurrentImageUpload } =
    useStoreApp();
  const { t } = useTranslation();

  const isCurrentImageEdit =
    (!getCurrentImageEdit.id || getLoadingImageUpload) &&
    !getCurrentImageUpload.isGalery;

  if (isCurrentImageEdit) return null;

  return (
    <ButtonAction
      name={t("downloadImage")}
      isClickPass
      handleAction={() => setComponenteKey("download-component")}
    />
  );
}

export default DownloadImage;
