import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const DropDownAction = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="pt-1 px-1 mb-2 flex items-center justify-between w-full text-left border-t font-general"
      >
        <span className="font-medium text-white ">{name}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        <div className="transition-opacity duration-300 ease-in-out">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropDownAction;
