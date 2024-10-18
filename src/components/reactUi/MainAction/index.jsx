import React from "react";
import useStoreApp from "../hooks/useStoreApp";
import useCreateModelMove from "../hooks/useCreateModelMove";
// import ClouWidgetReact from "../ClouWidgetReact";
import Prueba from "../ClouWidgetReact/prueba";
import useContainerSize from "../hooks/useContainerSize";
import UploadOtherImage from "./UploadOtherImage";

function MainAction({ children }) {
  const { getTopicHalloween } = useStoreApp();
  const { height, ref } = useContainerSize();
  const { canvasRef } = useCreateModelMove(getTopicHalloween);
  const { canvasRef: canvasRef2 } = useCreateModelMove(getTopicHalloween);
  return (
    <main className="flex-grow flex flex-col justify-center items-center h-full w-full">
      <div
        ref={ref}
        className="w-full h-full max-h-[480px] max-w-[580px] relative bg-containerMedia"
      >
        <img
          className="absolute w-full h-full top-0 left-0 opacity-40 -z-10"
          src="/public/containerMedia.avif"
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
        <Prueba heightContainer={height}>{children}</Prueba>
      </div>
      <UploadOtherImage>{children}</UploadOtherImage>
    </main>
  );
}

export default MainAction;
