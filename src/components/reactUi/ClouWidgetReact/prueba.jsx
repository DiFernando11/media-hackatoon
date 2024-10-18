import React, { useEffect, useState } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import classNames from "classnames";
import useStoreApp from "../hooks/useStoreApp";
import useTransformImage from "../hooks/useTransformImage";
import useContainerSize from "../hooks/useContainerSize";

function Prueba({ children, heightContainer }) {
  const {
    getCurrentImageUpload,
    getLoadingImageUpload,
    setIsLoadingImageUpload,
    getCurrentImageEdit,
  } = useStoreApp();
  const { handleUploadImage } = useTransformImage();

  const [value, setValue] = useState(100);

  const showImageEdit = () => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue > 0) {
          return prevValue - 5;
        }
        clearInterval(interval);
        return 0;
      });
    }, 50);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    // upload image
    const widget = document.getElementById("upload-widget");
    if (widget) {
      widget.addEventListener("clduploadwidget:success", ({ detail }) => {
        handleUploadImage(detail);
      });
    }
  }, []);

  useEffect(() => {
    // workaround - agrego altura a la clase .second
    const slider = document.querySelector("img-comparison-slider");
    console.log({ slider });
    if (slider) {
      const shadowRoot = slider.shadowRoot;
      const secondDiv = shadowRoot.querySelector(".second");
      if (secondDiv) secondDiv.style.height = "100%";
    }
  }, [getCurrentImageUpload.id]);

  if (!getLoadingImageUpload && !getCurrentImageUpload.id)
    return <>{children}</>;

  return (
    <div
      className={classNames(
        "relative w-full flex flex-col h-full items-center justify-center",
        {
          "bg-black": getLoadingImageUpload,
          "opacity-50": getLoadingImageUpload && !getCurrentImageUpload.id,
        }
      )}
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        className={classNames(
          "absolute z-50 animate-spin rounded-full h-16 w-16 border-t-4",
          "border-yellow-500 border-solid",
          { hidden: !getLoadingImageUpload }
        )}
      />
      <ImgComparisonSlider
        className={classNames("w-full h-full", {
          "pointer-events-none": !getCurrentImageEdit.id,
          "opacity-20": getLoadingImageUpload,
        })}
        value={value}
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
            height: `${heightContainer}px`,
          }}
        />

        {getCurrentImageEdit.id && (
          <img
            slot="second"
            src={getCurrentImageEdit.url}
            className="w-full bg-white"
            onLoad={() => {
              setIsLoadingImageUpload(false);
              showImageEdit();
            }}
            style={{
              height: `${heightContainer}px`,
            }}
          />
        )}
      </ImgComparisonSlider>
    </div>
  );
}

export default Prueba;
