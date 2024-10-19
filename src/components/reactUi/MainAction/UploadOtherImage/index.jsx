import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import ContainerMedia from "../../ContainerMedia";
import { PlusIcon } from "@heroicons/react/24/solid";
import GaleryImage from "../../GaleryImage";

function UploadOtherImage() {
  const { getCurrentImageUpload, getLoadingImageUpload, getImagesEditArray } =
    useStoreApp();

  if (!getCurrentImageUpload.id) return null;
  return (
    <div className="bg-containerMedia flex items-center gap-3 max-w-[580px] p-1 mt-2 w-full h-14">
      <div className="bg-containerMedia border h-14 w-16 bg-blue-500">
        <ContainerMedia>
          <PlusIcon className="size-6" />
        </ContainerMedia>
      </div>
      <GaleryImage />
    </div>
  );
}

export default UploadOtherImage;
