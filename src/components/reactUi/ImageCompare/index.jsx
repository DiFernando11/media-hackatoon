import React, { useState, useEffect } from 'react';

const ImageCompare = ({ image1, image2 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
    e.preventDefault(); // Evitar la selección de texto
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const updateSliderPosition = (e) => {
    const { left, width } = e.target.getBoundingClientRect();
    const position = Math.min(Math.max(0, ((e.clientX - left) / width) * 100), 100);
    setSliderPosition(position);
  };

  // Manejar el evento mousemove en el documento
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="relative w-full h-96 overflow-hidden select-none"
      onMouseDown={handleMouseDown}
    >
      <div className="absolute top-0 left-0 h-full" style={{ width: `${sliderPosition}%` }}>
        <img src={image1} alt="Image 1" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 h-full" style={{ width: `${100 - sliderPosition}%` }}>
        <img src={image2} alt="Image 2" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 h-full bg-red-500 cursor-ew-resize"
        style={{ width: '4px', left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      ></div>
    </div>
  );
};

export default ImageCompare;
