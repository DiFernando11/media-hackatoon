import { ChevronDownIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useState } from "react";

function DropDownActions({ name, options, handleAction }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      onClick={options ? handleClick : handleAction}
      className={classNames(
        "w-full font-general text-white border-t pt-1 mb-2 flex justify-between items-center px-1"
      )}
    >
      <p>{name}</p>
      <span className="w-5 h-5 rounded-full border border-white bg-green-400" />
    </li>
  );
}

export default DropDownActions;
