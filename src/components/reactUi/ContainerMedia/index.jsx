import React from "react";
import useCreateModelMove from "../hooks/useCreateModelMove";
import useStoreApp from "../hooks/useStoreApp";
import useTransformImage from "../hooks/useTransformImage";

const ContainerMedia = () => {
  const { handleUploadImage } = useTransformImage();
  const {
    getCurrentImageEdit,
    getImagesEditArray,
    addImagesEditArray,
    setCurrentImageEdit,
    setSliderPosition,
  } = useStoreApp();
  const openWidget = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: "drkv8ebxx",
        uploadPreset: "upload-hackatoon-image",
        sources: ["local", "url"],
        multiple: false,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setSliderPosition(100);
          handleUploadImage(result.info);
          if (getCurrentImageEdit.id) {
            addImagesEditArray(getCurrentImageEdit);
            setCurrentImageEdit({});
          }

          console.log("Imagen subida exitosamente:", result.info);
        }
      }
    );
  };

  return (
    <button
      onClick={openWidget}
      id="upload-button"
      className="block w-full h-full text-white"
    />
  );
};

export default ContainerMedia;
