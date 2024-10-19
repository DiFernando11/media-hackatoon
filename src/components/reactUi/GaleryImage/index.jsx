import React, { useRef } from "react";
import useStoreApp from "../hooks/useStoreApp";

const GaleryImage = () => {
  const {
    setCurrentImageUpload,
    getCurrentImageUpload,
    setLastCurrentImageUpload,
    getImagesEditArray,
    getLastCurrentImageUpload,
  } = useStoreApp();

  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleSelectedImage = (image) => {
    setLastCurrentImageUpload(
      getLastCurrentImageUpload?.id
        ? getLastCurrentImageUpload
        : getCurrentImageUpload
    );
    setCurrentImageUpload({
      ...image,
      isGalery: true,
    });
  };

  const mouseDownHandler = (e) => {
    e.preventDefault(); // Prevenir la selección de texto
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const mouseLeaveHandler = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const mouseUpHandler = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const mouseMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Ajustable
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const touchStartHandler = (e) => {
    e.preventDefault(); // Prevenir la selección de texto
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const touchMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="scrollbar-hidden cursor-pointer h-14 relative flex w-full overflow-x-auto overflow-y-hidden select-none"
      onMouseDown={mouseDownHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
    >
      <div className="flex gap-2 h-14 justify-center items-center">
        {getImagesEditArray.map((image) => (
          <div
            className="h-12 w-16 bg-blue-500 relative animate-zoom-in"
            key={image.id}
            onClick={() => handleSelectedImage(image)}
          >
            <img src={image.url} alt={image.name} className="h-12 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryImage;
