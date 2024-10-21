import React, { useState, useRef, useEffect } from "react";
import useStoreApp from "../hooks/useStoreApp";

const ImageCompare = ({ image1, image2, setIsLoadingImage }) => {
  const [attempts, setAttempts] = useState(0);
  const {
    getSelectedTopic,
    getSliderPosition,
    setSliderPosition,
    setCurrentImageEdit,
    getCurrentImageEdit,
  } = useStoreApp();
  const [isManualSliding, setIsManualSliding] = useState(false);
  const imageContainer = useRef(undefined);

  const currentTopic = getSelectedTopic();

  const slide = (xPosition) => {
    setIsManualSliding(true);
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    const handlePositionMove = () => {
      if (xPosition < containerBoundingRect.left) return 0;
      if (xPosition > containerBoundingRect.right) return 1;
      return (
        (xPosition - containerBoundingRect.left) / containerBoundingRect.width
      );
    };
    setSliderPosition(handlePositionMove());
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (e) => {
    slide(e.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
    setIsManualSliding(false); // Vuelve al modo automático después de soltar el mouse
  };

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };

  const handleSecondImageLoad = () => {
    setAttempts(0);
    setIsLoadingImage(false);
    setSliderPosition(0);
  };

  const handleError = () => {
    setAttempts((prev) => prev + 1);
    if (attempts < 3) {
      console.log("Intentando cargar nuevamente...");
      const newUrl = `${getCurrentImageEdit.url}?t=${Date.now()}`;
      setTimeout(() => {
        setCurrentImageEdit({
          ...getCurrentImageEdit,
          url: newUrl,
        });
      }, 5000);
    } else {
      setAttempts(0);
      setIsLoadingImage(false);
      setCurrentImageEdit({});
      console.log("Se alcanzó el número máximo de intentos");
    }
  };

  return (
    <div
      ref={imageContainer}
      className="w-full absolute top-0 h-full flex justify-center items-center select-none"
    >
      <img
        src={image1}
        alt="Imagen 1"
        className="absolute bg-black top-0 inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0 , ${getSliderPosition * 100}% 0 , ${
            getSliderPosition * 100
          }% 100%, 0 100%)`,
          height: "100%",
          transition: isManualSliding ? "none" : "clip-path 1s ease-in-out",
        }}
        onLoad={() => {
          setIsLoadingImage(false);
        }}
      />
      {image2 && (
        <>
          <img
            style={{ height: "100%" }}
            src={image2}
            alt="Imagen 2"
            className="w-full h-full pointer-events-none"
            onLoad={handleSecondImageLoad}
            onError={handleError}
          />
          <div
            style={{
              left: `${getSliderPosition * 100}%`,
              transition: isManualSliding ? "none" : "left 1s ease-in-out",
            }}
            className="absolute inset-y-0"
          >
            <div className="relative h-full">
              <div
                className="absolute inset-y-0 w-[0.1px]"
                style={{
                  backgroundColor: currentTopic.bgColor.secondary,
                }}
              />
              <div
                style={{
                  touchAction: "none",
                  backgroundColor: currentTopic.bgColor.secondary,
                }}
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                className="flex border items-center cursor-pointer justify-center w-8 h-8 -ml-4 -mt-4 rounded-full bg-white absolute top-1/2 shadow-xl"
              >
                <img
                  id="imagen-upload-current"
                  style={{ touchAction: "none" }}
                  src={currentTopic.bgImage}
                  className="w-6 h-6 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCompare;
