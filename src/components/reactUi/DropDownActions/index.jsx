import { ChevronDownIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import React, { useState } from "react";

function DropDownActions({ name, options, handleAction }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        onClick={options ? handleClick : handleAction}
        className={classNames(
          "w-full text-white border-t mb-2 flex justify-between items-center px-1"
        )}
      >
        <p>{name}</p>
        {options && (
          <ChevronDownIcon
            className={classNames(
              "size-4 mt-1",
              "transform transition-transform duration-300 ease-in-out",
              { "rotate-180": isOpen, "rotate-0": !isOpen }
            )}
          />
        )}
      </button>
      <ul
        className={classNames(
          "transition-all duration-500 ease-in-out overflow-hidden",
          {
            "max-h-0 opacity-0": !isOpen,
            "max-h-[200px] opacity-100": isOpen,
          }
        )}
      >
        {options}
      </ul>
    </li>
  );
}

export default DropDownActions;
