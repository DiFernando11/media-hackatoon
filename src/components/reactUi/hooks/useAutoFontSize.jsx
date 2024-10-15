import { useEffect, useRef } from "react";
import useStoreApp from "./useStoreApp";

function pixelToRem(px) {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return parseFloat(px / rootFontSize);
}

const useAutoFontSize = ({ text, minFontSizeRem = 0.5 }) => {
  const { getTopicHalloween } = useStoreApp();
  const containerRef = useRef(null);
  const initialFontSizeRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (!containerRef.current) return;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const containerWidth = containerRef.current.offsetWidth;
      const childElement = containerRef.current.firstElementChild;
      if (!childElement) return;

      const computedStyleChild = window.getComputedStyle(childElement);
      const remFontSize = parseFloat(computedStyleChild.fontSize);
      const { fontFamily } = computedStyleChild;

      if (initialFontSizeRef.current === null) {
        initialFontSizeRef.current = remFontSize;
      }

      const measureTextWidth = (fontSizeText) => {
        context.font = `${fontSizeText}px ${fontFamily}`;
        return context.measureText(text).width;
      };

      let fontSizeCurrent = initialFontSizeRef.current;
      const isMayorFontSize = pixelToRem(fontSizeCurrent) > minFontSizeRem;

      // Reducir el tamaño de la fuente si el texto es más grande que el contenedor
      while (
        measureTextWidth(fontSizeCurrent) > containerWidth &&
        isMayorFontSize
      ) {
        fontSizeCurrent -= 1;
      }

      // Aumentar el tamaño de la fuente si el texto es más pequeño que el contenedor
      while (
        measureTextWidth(fontSizeCurrent) < containerWidth &&
        containerWidth - measureTextWidth(fontSizeCurrent) > 32
      ) {
        fontSizeCurrent += 1;
      }

      if (childElement) {
        const fontSizeToRem = pixelToRem(fontSizeCurrent);
        childElement.style.fontSize = `${
          fontSizeToRem < minFontSizeRem ? minFontSizeRem : fontSizeToRem
        }rem`;
      }
    };

    // Usamos ResizeObserver para detectar cambios de tamaño en el contenedor
    const observer = new ResizeObserver(() => adjustFontSize());

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Limpiamos el observer al desmontar el componente
    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [text, minFontSizeRem, getTopicHalloween]);

  return containerRef;
};

export default useAutoFontSize;
