import React from "react";
import Sidebar from "../SideBar";
import "../../../i18n";
import SmokeBackground from "../SmokeBackround";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import useStoreApp from "../hooks/useStoreApp";

const LayoutApp = ({ children }) => {
  const { setOpenActionMedia } = useStoreApp();
  return (
    <>
      <SmokeBackground />
      <div className="w-[200px] h-full flex py-5 px-5 sm:px-16 flex-col flex-grow">
        {children}
      </div>
      <Sidebar />
      <Cog8ToothIcon
        onClick={() => setOpenActionMedia(true)}
        className={classNames(
          "size-8 block cursor-pointer",
          "text-red-200",
          "absolute top-2 right-2",
          "animate-spin",
          "md:hidden"
        )}
      />
    </>
  );
};

export default LayoutApp;
