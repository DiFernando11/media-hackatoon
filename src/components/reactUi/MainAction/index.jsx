import React, { useEffect, useState } from "react";
import useStoreApp from "../hooks/useStoreApp";
import useCreateModelMove from "../hooks/useCreateModelMove";
import CloudWidgetReact from "../CloudWidgetReact";
import UploadOtherImage from "./UploadOtherImage";
import Modal from "../Modal";
import useLocalStorage from "../hooks/useLocalStorage";
import ModalContinueEdit from "../Modal/ModalContinueEdit";

function MainAction() {
  const { getTopicHalloween, getSelectedTopic, getCurrentImageUpload } =
    useStoreApp();

  const { canvasRef } = useCreateModelMove(getTopicHalloween);
  const { canvasRef: canvasRef2 } = useCreateModelMove(getTopicHalloween);
  return (
    <main className="flex-grow flex flex-col justify-center items-center h-full w-full">
      {/* <ModalContinueEdit /> */}
      <div className="w-full h-full max-h-[480px] max-w-[580px] relative bg-containerMedia">
        {getCurrentImageUpload?.isGalery && (
          <div
            style={{
              borderColor: getSelectedTopic().bgColor.secondary,
            }}
            className="w-full border-b-2 bg-titleGalery absolute top-0 left-1/2  transform -translate-x-1/2 z-20 font-general"
          >
            <h2 className="text-white text-center px-2 rounded-sm">
              Tu galeria
            </h2>
          </div>
        )}
        <img
          className="absolute w-full h-full top-0 left-0 opacity-40 -z-10"
          src="/containerMedia.avif"
          alt="fondo para subir imagen"
        />
        <canvas
          id="webgl"
          className="w-32 z-20 h-32 absolute sm:left-0 -top-8 
          left-1/2 transform -translate-x-1/2 pointer-events-none"
          ref={canvasRef}
        />
        <canvas
          id="webgl2"
          className="w-32 z-20 h-32 hidden absolute -top-8 right-1/2 
          transform translate-x-1/2 pointer-events-none sm:right-0 sm:block"
          ref={canvasRef2}
        />
        <CloudWidgetReact />
      </div>
      <UploadOtherImage />
    </main>
  );
}

export default MainAction;
