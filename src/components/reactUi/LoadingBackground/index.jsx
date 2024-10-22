import React, { useState, useEffect } from "react";
import classNames from "classnames";

function LoadingBackground({ isLoading }) {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 500); // Espera el tiempo de la animación antes de ocultarlo
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center justify-center",
        "transition-opacity duration-500 ease-in-out", // Transición suave
        { "opacity-0": !isLoading, "opacity-100": isLoading }
      )}
      style={{
        pointerEvents: isLoading ? "auto" : "none",
        visibility: isVisible ? "visible" : "hidden", // Control de visibilidad para evitar clics cuando está en transición
      }}
    >
      <div
        className={classNames(
          "absolute z-50 animate-spin rounded-full h-28 w-28 border-t-4",
          "border-yellow-500 border-solid"
        )}
      />
    </div>
  );
}

export default LoadingBackground;
