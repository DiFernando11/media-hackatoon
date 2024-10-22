import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function TransformFace({ setComponenteKey }) {
  const { getCurrentImageUpload } = useStoreApp();
  const { t } = useTranslation();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;
  return (
    <ButtonAction
      name={t("actionFavoriteMask")}
      isClickPass
      handleAction={() => setComponenteKey("transforme-face-component")}
    />
  );
}

export default TransformFace;
