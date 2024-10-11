import React from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import useStoreApp from "../hooks/useStoreApp";

function HeaderPresentation() {
  const { openActionMedia, setOpenActionMedia } = useStoreApp();
  return (
    <div
      className="relative pb-5 flex 
      justify-center  text-center"
    >
      <h1 className="text-white">Feliz Hallowen</h1>
      <Cog8ToothIcon
        onClick={() => setOpenActionMedia(true)}
        className="absolute -top-3 text-red-200 right-2 size-8 block animate-spin cursor-pointer sm:hidden"
      />
    </div>
  );
}

export default HeaderPresentation;
