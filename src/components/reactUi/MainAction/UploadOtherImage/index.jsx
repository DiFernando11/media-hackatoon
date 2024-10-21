import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import ContainerMedia from "../../ContainerMedia";
import { ArrowPathIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import GaleryImage from "../../GaleryImage";

function UploadOtherImage() {
  const {
    getCurrentImageUpload,
    setCurrentImageUpload,
    getLastCurrentImageUpload,
    setSliderPosition
  } = useStoreApp();

  const handleReturnEditImage = () => {
    setCurrentImageUpload(getLastCurrentImageUpload);
    setSliderPosition(1);
  }

  if (!getCurrentImageUpload.id) return null;
  return (
    <div
      className="bg-containerMedia flex items-center gap-3 max-w-[580px] 
      p-1 mt-2 w-full h-14 transition-transform 
      duration-500 ease-out transform animate-slide-in-left"
    >
      <div className="bg-containerMedia border h-12 w-16 bg-blue-500">
        {getCurrentImageUpload.isGalery ? (
          <div
            onClick={handleReturnEditImage}
            className="flex justify-center items-center h-12"
          >
            <ArrowUturnLeftIcon className="size-6 text-white" />
          </div>
        ) : (
          <ContainerMedia>
            <ArrowPathIcon className="size-6" />
          </ContainerMedia>
        )}
      </div>
      <GaleryImage />
    </div>
  );
}

export default UploadOtherImage;
