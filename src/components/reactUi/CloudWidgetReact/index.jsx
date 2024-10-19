import React, { useEffect, useState } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import classNames from "classnames";
import useStoreApp from "../hooks/useStoreApp";
import ContainerMedia from "../ContainerMedia";
import ImageCompare from "../CustomImageCompare";

function CloudWidgetReact({ heightContainer }) {
  const {
    getCurrentImageUpload,
    getLoadingImageUpload,
    setIsLoadingImageUpload,
    getCurrentImageEdit,
    getSliderPosition,
    setSliderPosition,
  } = useStoreApp();

  const [value, setValue] = useState(100);

  useEffect(() => {
    // workaround - agrego altura a la clase .second
    const slider = document.querySelector("img-comparison-slider");
    if (slider) {
      const shadowRoot = slider.shadowRoot;
      const secondDiv = shadowRoot.querySelector(".second");
      if (secondDiv) secondDiv.style.height = "100%";
    }
  }, [getCurrentImageUpload.id]);

  if (!getLoadingImageUpload && !getCurrentImageUpload.id)
    return <ContainerMedia />;

  return (
    <div
      className={classNames(
        "relative w-full h-full flex flex-col items-center justify-center",
        {
          "bg-black": getLoadingImageUpload,
          "opacity-50": getLoadingImageUpload && !getCurrentImageUpload.id,
        }
      )}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div
        className={classNames(
          "absolute z-50 animate-spin rounded-full h-16 w-16 border-t-4",
          "border-yellow-500 border-solid",
          { hidden: !getLoadingImageUpload }
        )}
      />
      <ImageCompare
        image1={getCurrentImageUpload.url}
        image2={getCurrentImageEdit.url}
      />
      {/* <ImgComparisonSlider
        className={classNames("w-full h-full", {
          "pointer-events-none": !getCurrentImageEdit.id,
          "opacity-20": getLoadingImageUpload,
        })}
        value={getSliderPosition}
        style={{
          "--default-handle-width": getCurrentImageEdit.id ? "80px" : 0,
          "--divider-width": getCurrentImageEdit?.id ? "1px" : 0,
        }}
      >
        <img
          slot="first"
          className="w-full bg-white"
          src={getCurrentImageUpload.url}
          onLoad={() => setIsLoadingImageUpload(false)}
          style={{
            height: '100%',
            // height: `${heightContainer}px`,
          }}
        />
        {getCurrentImageEdit.id && (
          <img
            slot="second"
            src={getCurrentImageEdit.url}
            className="w-full bg-white"
            onLoad={() => {
              setIsLoadingImageUpload(false);
              setSliderPosition(0);
            }}
            style={{
              height: '100%',
              // height: `${heightContainer}px`,
            }}
          />
        )}
      </ImgComparisonSlider> */}
    </div>
  );
}

export default CloudWidgetReact;
