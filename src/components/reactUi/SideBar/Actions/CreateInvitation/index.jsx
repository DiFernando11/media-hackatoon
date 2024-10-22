import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function CreateInvitation({ setComponenteKey }) {
  const { getCurrentImageUpload } = useStoreApp();
  const { t } = useTranslation();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={t("actionPersonalizedInv")}
      isClickPass
      handleAction={() => setComponenteKey("create-invitation-component")}
    />
  );
}

export default CreateInvitation;
