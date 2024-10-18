import React from "react";
import useStoreApp from "../../hooks/useStoreApp";

function UploadOtherImage({ children }) {
  const { getCurrentImageUpload, getLoadingImageUpload } = useStoreApp();
  if (!getCurrentImageUpload.id || getLoadingImageUpload) return null;
  return (
    <div className="flex items-center max-w-[580px] p-1 mt-2 border bg-red-500 w-full h-16">
      <div className="h-full w-16 bg-blue-500">{ children }</div>
    </div>
  );
}

export default UploadOtherImage;
