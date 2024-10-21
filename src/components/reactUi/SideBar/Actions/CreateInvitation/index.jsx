import React from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";

function CreateInvitation({ setComponenteKey }) {
  const { getCurrentImageUpload } = useStoreApp();

  if (getCurrentImageUpload.isGalery || !getCurrentImageUpload.id) return null;

  return (
    <ButtonAction
      name={"Crea una invitacion personalizada"}
      isClickPass
      handleAction={() => setComponenteKey("create-invitation-component")}
    />
  );
}

export default CreateInvitation;
