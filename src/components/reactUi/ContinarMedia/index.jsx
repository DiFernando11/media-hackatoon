import React from "react";
import useCreateModelMove from "../hooks/useCreateModelMove";
import { MODEL_TOPIC } from "../../../utils/constants";
import useStoreApp from "../hooks/useStoreApp";

const ContainerMedia = () => {
  const { getTopicHalloween } = useStoreApp();
  console.log({ getTopicHalloween });
  const { canvasRef } = useCreateModelMove(getTopicHalloween);
  const { canvasRef: canvasRef2 } = useCreateModelMove(getTopicHalloween);
  return (
    <button
      id="upload-button"
      className="block w-full border-cyan-500 p-8 h-full text-white border"
    >
      <canvas
        id="webgl"
        className="w-32 h-32 absolute sm:left-0 -top-8 
        left-1/2 transform -translate-x-1/2"
        ref={canvasRef}
      />
      <canvas
        id="webgl2"
        className="w-32 h-32 hidden absolute -top-8 right-1/2 transform translate-x-1/2 sm:right-0 sm:block"
        ref={canvasRef2}
      />
      hola
    </button>
  );
};

export default ContainerMedia;
