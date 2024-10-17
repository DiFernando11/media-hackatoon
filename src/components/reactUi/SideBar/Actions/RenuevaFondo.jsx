import React from "react";
import DropDownActions from "../../DropDownActions";

function RenuevaFondo({ active, handleToggle }) {
  const name = "renueva-fondo";
  return (
    <DropDownActions
      isActive={active === name}
      name={act.name}
      handleAction={() => {
        handleToggle(name);
      }}
    />
  );
}

export default RenuevaFondo;
