// ImageCompare.js
import React, { useState, useRef, useEffect } from "react";

const ImageCompare = ({ image1, image2 }) => {
  console.log({ image1, image2 });
  return (
    <>
      {image2?.length > 0 ? (
        <img className="w-full h-full" alt="daisy" src={image1} />
      ) : (
        <div className="diff aspect-[16/9] h-full w-full bg-red-500">
          <div className="diff-item-1">
            <img alt="daisy" src={image1} />
          </div>
          <div className="diff-item-2">
            <img alt="daisy" src={image2} />
          </div>
          <div className="diff-resizer"></div>
        </div>
      )}
    </>
  );
};

export default ImageCompare;
