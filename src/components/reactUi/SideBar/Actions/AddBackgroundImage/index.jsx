import React from "react";
import useStoreApp from "../../../hooks/useStoreApp";
import ButtonAction from "../../../ButtonAction";
import { useTranslation } from "react-i18next";

function AddBackroundImage({ setComponenteKey }) {
  const { t } = useTranslation();
  const { getCurrentImageUpload } = useStoreApp();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={t("actionBackgroundImage")}
      isClickPass
      handleAction={() => setComponenteKey("add-background-component")}
    />
  );
}

export default AddBackroundImage;
