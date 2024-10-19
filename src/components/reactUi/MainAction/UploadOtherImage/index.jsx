import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import ContainerMedia from "../../ContainerMedia";

function UploadOtherImage() {
  const { getCurrentImageUpload, getLoadingImageUpload, getImagesEditArray } =
    useStoreApp();
  // if (!getCurrentImageUpload.id) return null;
  return (
    <div className="flex items-center gap-3 max-w-[580px] p-1 mt-2 border w-full h-16">
      <div className="h-full w-16 bg-blue-500">
        <ContainerMedia />
      </div>
      {getImagesEditArray.map((image) => {
        return (
          <div className="h-14 w-16 bg-blue-500" key={image.id}>
            <img src={image.url} alt="" className="h-14 w-16" />
          </div>
        );
      })}
    </div>
  );
}

export default UploadOtherImage;
