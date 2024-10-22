import React from "react";
import useStoreApp from "../hooks/useStoreApp";
import ContainerMedia from "../ContainerMedia";
import ImageCompare from "../CustomImageCompare";

function CloudWidgetReact() {
  const {
    getCurrentImageUpload,
    getLoadingImageUpload,
    setIsLoadingImageUpload,
    getCurrentImageEdit,
  } = useStoreApp();

  if (!getLoadingImageUpload && !getCurrentImageUpload.id)
    return <ContainerMedia />;

  return (
    <>
      <ImageCompare
        image1={getCurrentImageUpload.url}
        image2={getCurrentImageEdit.url}
        setIsLoadingImage={setIsLoadingImageUpload}
      />
    </>
  );
}

export default CloudWidgetReact;
