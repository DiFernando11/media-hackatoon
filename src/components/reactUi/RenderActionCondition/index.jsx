import React from "react";
import ActionDownload from "../SideBar/Actions/DownloadImage/ActionDownload";
import ButtonsAction from "../SideBar/ButtonsAction";
import ActionRenoveBackground from "../SideBar/Actions/RenoveBackground/ActionRenoveBackground";

const Componente1 = () => (
  <div className="componente">Este es el Componente 1</div>
);
const Componente2 = () => (
  <div className="componente">Este es el Componente 2</div>
);
const Componente3 = () => (
  <div className="componente">Este es el Componente 3</div>
);

function RenderActionCondition({ componenteKey, setComponenteKey }) {
  const componentes = {
    componente1: <Componente1 />,
    componente2: <Componente2 />,
    "renove-background-component": <ActionRenoveBackground />,
    "download-component": <ActionDownload />,
  };
  return (
    <>
      {componentes[componenteKey] || (
        <ButtonsAction
          componenteKey={componenteKey}
          setComponenteKey={setComponenteKey}
        />
      )}
    </>
  );
}

export default RenderActionCondition;
