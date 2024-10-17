import React, { useEffect, useState } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import classNames from "classnames";
import useStoreApp from "../hooks/useStoreApp";
import useTransformImage from "../hooks/useTransformImage";
import LoadingUpload from "./LoadingUpload";

function Prueba({ children }) {
  const {
    getCurrentImageUpload,
    getLoadingImageUpload,
    setisLoadingImageUpload,
  } = useStoreApp();
  const { handleUploadImage } = useTransformImage();

  const [value, setValue] = useState(100);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    // workaround - agrego altura a la clase .second
    const slider = document.querySelector("img-comparison-slider");
    if (slider) {
      const shadowRoot = slider.shadowRoot;
      const secondDiv = shadowRoot.querySelector(".second");
      if (secondDiv) secondDiv.style.height = "100%";
    }
    // upload image
    const widget = document.getElementById("upload-widget");
    if (widget) {
      widget.addEventListener("clduploadwidget:success", ({ detail }) =>
        handleUploadImage(detail)
      );
    }
  }, []);

  if (!getLoadingImageUpload && !getCurrentImageUpload.id)
    return <>{children}</>;

  return (
    <div
      className={classNames(
        "w-full flex flex-col h-full items-center justify-center",
        {
          "bg-black": getLoadingImageUpload,
        }
      )}
    >
      <div
        className={classNames(
          "animate-spin rounded-full h-16 w-16 border-t-4",
          "border-yellow-500 border-solid",
          { hidden: !getLoadingImageUpload }
        )}
      />
      <ImgComparisonSlider
        className={classNames("w-full h-full", {
          "pointer-events-none": false,
          hidden: getLoadingImageUpload
        })}
        value={100}
        style={{ "--default-handle-width": "100px" }}
        //    value={value}
      >
        <img
          slot="first"
          src={getCurrentImageUpload.url}
          className="w-full h-full"
          onLoad={() => setisLoadingImageUpload(false)}
        />
        {/* <img
          slot="second"
          src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
          className="w-full h-full"
          height={"100%"}
        /> */}
      </ImgComparisonSlider>
    </div>
  );
}

export default Prueba;
