import { useState, useEffect, useRef } from "react";
import { debounce } from "../../../utils/debounce";

const useContainerSize = (debounceDelay = 100) => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);

  const updateHeight = debounce(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setHeight(height);
    }
  }, debounceDelay);

  useEffect(() => {
    if (containerRef.current) {
      updateHeight(); // Llamar a la función inicialmente
    }

    // Escuchar el evento resize de la ventana
    window.addEventListener("resize", updateHeight);

    return () => {
      // Limpiar el event listener cuando el componente se desmonte
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { ref: containerRef, height };
};

export default useContainerSize;
