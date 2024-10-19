import React, { useRef } from "react";
import useStoreApp from "../hooks/useStoreApp";

const GaleryImage = () => {
  const { setCurrentImageUpload } = useStoreApp();
  const images = [
    {
      id: 1,
      url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343102/difer-images/fyd4zlzmvd5kdkcdlxhs.webp",
      publicId: "difer-images",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343102/difer-images/fyd4zlzmvd5kdkcdlxhs.webp",
      publicId: "difer-images",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343102/difer-images/fyd4zlzmvd5kdkcdlxhs.webp",
      publicId: "difer-images",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729343102/difer-images/fyd4zlzmvd5kdkcdlxhs.webp",
      publicId: "difer-images",
    },
  ];
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleSelectedImage = (image) => {
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
    const walk = (x - startX) * 1; // Ajustable
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
        {images.map((image, index) => (
          <div
            className="h-12 w-16 bg-blue-500"
            key={image.id}
            onClick={(image) => handleSelectedImage(image)}
          >
            <img src={image.url} alt="" className="h-12 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleryImage;
