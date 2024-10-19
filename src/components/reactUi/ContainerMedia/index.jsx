import React from "react";
import useTransformImage from "../hooks/useTransformImage";

const ContainerMedia = ({ children }) => {
  const { handleOpenWidget } = useTransformImage();

  return (
    <button
      onClick={handleOpenWidget}
      id="upload-button"
      className="flex items-center justify-center w-full h-full text-white"
    >
      {children}
    </button>
  );
};

export default ContainerMedia;
