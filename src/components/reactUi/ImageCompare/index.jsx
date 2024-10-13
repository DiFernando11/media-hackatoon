import React, { useEffect, useState } from "react";
import { ReactCompareSliderImage } from "react-compare-slider";

function ImageCompare({ src, alt, className, srcImageLoading }) {
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading && "hidden"}`}
        onLoad={handleImageLoad}
      />
      {loading && (
        <img className={className} src={srcImageLoading} alt="cargando" />
      )}
    </>
  );
}

export default ImageCompare;
