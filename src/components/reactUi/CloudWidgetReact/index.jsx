import React, { useEffect, useState } from "react";
import classNames from "classnames";
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
      <div className={classNames("relative w-full h-full ")}>
        <div
          className={classNames(
            "absolute z-10 bg-black opacity-50 w-full h-full flex items-center justify-center",
            { hidden: !getLoadingImageUpload }
          )}
        >
          <div
            className={classNames(
              "absolute z-50 k animate-spin rounded-full h-16 w-16 border-t-4",
              "border-yellow-500 border-solid "
            )}
          />
        </div>
        <ImageCompare
          image1={getCurrentImageUpload.url}
          image2={getCurrentImageEdit.url}
          setIsLoadingImage={setIsLoadingImageUpload}
        />
      </div>
    </>
  );
}

export default CloudWidgetReact;
