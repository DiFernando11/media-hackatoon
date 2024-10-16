import { ChevronDownIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useState } from "react";
import { modelByTopic } from "../../../utils";
import useStoreApp from "../hooks/useStoreApp";

function DropDownActions({ name, isActive, handleAction }) {
  const { getSelectedTopic } = useStoreApp();
  const bgColor = getSelectedTopic().bgColor.secondary;

  return (
    <li
      onClick={handleAction}
      className={classNames(
        "w-full cursor-pointer font-general text-white border-t pt-1 mb-2 flex justify-between items-center px-1"
      )}
    >
      <p>{name}</p>
      <span
        className={classNames(
          "w-5 h-5 rounded-full border",
          { "bg-black": !isActive } // Colores según el estado,
        )}
        style={{
          transition: "background-color 0.5s ease",
          border: isActive ? "2px solid" : "1px solid",
          borderColor: isActive ? "white" : bgColor,
          backgroundColor: isActive ? bgColor : "black"
        }}
      />
    </li>
  );
}

export default DropDownActions;
