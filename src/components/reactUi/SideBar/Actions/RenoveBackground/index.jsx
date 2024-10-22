import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function RenoveBackground({ setComponenteKey }) {
  const { t } = useTranslation();
  const { getCurrentImageUpload } = useStoreApp();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={t("actionCustomizeBg")}
      isClickPass
      handleAction={() => setComponenteKey("renove-background-component")}
    />
  );
}

export default RenoveBackground;
