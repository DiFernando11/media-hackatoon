import React from "react";
import useCreateModelMove from "../hooks/useCreateModelMove";
import useStoreApp from "../hooks/useStoreApp";
import useTransformImage from "../hooks/useTransformImage";
import { v4 as uuidv4 } from "uuid";

const ContainerMedia = ({ children }) => {
  const { handleUploadImage } = useTransformImage();
  const {
    getCurrentImageEdit,
    getImagesEditArray,
    addImagesEditArray,
    setCurrentImageEdit,
    setSliderPosition,
    setCurrentImageUpload,
    setIsLoadingImageUpload,
  } = useStoreApp();
  const openWidget = () => {
    setCurrentImageUpload({
      url: null,
      id: "id ahora",
    });
    setIsLoadingImageUpload(true);
    setTimeout(() => {
      setCurrentImageUpload({
        url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1666206428/samples/animals/cat.jpg",
        id: uuidv4(),
        publicId: "idPublico",
      });
    }, 2000);
    // cloudinary.openUploadWidget(
    //   {
    //     cloudName: "drkv8ebxx",
    //     uploadPreset: "upload-hackatoon-image",
    //     sources: ["local", "url"],
    //     multiple: false,
    //   },
    //   (error, result) => {
    //     if (!error && result && result.event === "success") {
    //       setSliderPosition(100);
    //       handleUploadImage(result.info);
    //       if (getCurrentImageEdit.id) {
    //         addImagesEditArray(getCurrentImageEdit);
    //         setCurrentImageEdit({});
    //       }

    //       console.log("Imagen subida exitosamente:", result.info);
    //     }
    //   }
    // );
  };

  return (
    <button
      onClick={openWidget}
      id="upload-button"
      className="flex items-center justify-center w-full h-full text-white"
    >
      {children}
    </button>
  );
};

export default ContainerMedia;
