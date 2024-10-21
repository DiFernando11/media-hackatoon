import React from "react";
import ActionDownload from "../SideBar/Actions/DownloadImage/ActionDownload";
import ButtonsAction from "../SideBar/ButtonsAction";
import ActionRenoveBackground from "../SideBar/Actions/RenoveBackground/ActionRenoveBackground";
import ActionAddBackground from "../SideBar/Actions/AddBackgroundImage/ActionAddBackground";
import ActionCreateInvitation from "../SideBar/Actions/CreateInvitation/ActionCreateInvitation";

function RenderActionCondition({ componenteKey, setComponenteKey }) {
  const componentes = {
    "renove-background-component": <ActionRenoveBackground />,
    "download-component": <ActionDownload />,
    "add-background-component": <ActionAddBackground />,
    "create-invitation-component": <ActionCreateInvitation />,
  };
  return (
    <>
      {componentes[componenteKey] || (
        <ButtonsAction setComponenteKey={setComponenteKey} />
      )}
    </>
  );
}

export default RenderActionCondition;
