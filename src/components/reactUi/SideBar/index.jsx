// Sidebar.jsx
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { isSmMQ } from "../utils/constants";
import { BeakerIcon, XCircleIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const width = useMediaQuery();
  const [isOpen, setIsOpen] = useState(!isSmMQ(width));
  useEffect(() => {
    setIsOpen(!isSmMQ(width));
  }, [width]);
  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute p-2 bg-blue-500 text-white rounded-md"
        >
          Abrir
        </button>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-40 bg-gray-800 text-white p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <XCircleIcon
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer block sm:hidden ml-auto size-6 text-blue-500"
        />
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">Enlace 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
