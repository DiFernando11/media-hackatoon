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

  // Definir límites de tamaño de fuente
  const MIN_FONT_SIZE_PX = 24;
  const MAX_FONT_SIZE_PX = 64;

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

      while (
        measureTextWidth(fontSizeCurrent) > containerWidth &&
        fontSizeCurrent > MIN_FONT_SIZE_PX &&
        isMayorFontSize
      ) {
        fontSizeCurrent -= 1;
      }

      while (
        measureTextWidth(fontSizeCurrent) < containerWidth &&
        containerWidth - measureTextWidth(fontSizeCurrent) > 32 &&
        fontSizeCurrent < MAX_FONT_SIZE_PX
      ) {
        fontSizeCurrent += 1;
      }

      if (childElement) {
        const fontSizeToRem = pixelToRem(fontSizeCurrent);
        const adjustedFontSizeRem =
          fontSizeToRem < minFontSizeRem
            ? minFontSizeRem
            : pixelToRem(
                Math.max(
                  MIN_FONT_SIZE_PX,
                  Math.min(MAX_FONT_SIZE_PX, fontSizeCurrent)
                )
              );

        childElement.style.fontSize = `${adjustedFontSizeRem}rem`;
      }
    };

    const observer = new ResizeObserver(() => adjustFontSize());

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [text, minFontSizeRem, getTopicHalloween]);

  return containerRef;
};

export default useAutoFontSize;
