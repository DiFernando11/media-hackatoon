import React, { useState, useRef, useEffect } from "react";
import useStoreApp from "../hooks/useStoreApp";

const ImageCompare = ({ image1, image2, setIsLoadingImage }) => {
  const { getSelectedTopic, getSliderPosition, setSliderPosition } =
    useStoreApp();
  const [isManualSliding, setIsManualSliding] = useState(false); // Para detectar si se está moviendo manualmente
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

  // Establece la transición solo cuando la segunda imagen haya cargado
  const handleSecondImageLoad = () => {
    setIsLoadingImage(false);
    setSliderPosition(0);
  };

  return (
    <div
      ref={imageContainer}
      className="w-full absolute top-0 h-full flex justify-center items-center select-none"
    >
      <img
        src={image1}
        alt="Imagen 1"
        className="absolute top-0 inset-0 w-full h-full pointer-events-none"
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
