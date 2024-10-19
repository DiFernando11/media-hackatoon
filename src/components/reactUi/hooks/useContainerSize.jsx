import { useState, useEffect, useRef } from "react";
import { debounce } from "../../../utils/debounce";
import useStoreApp from "./useStoreApp";

const useContainerSize = (debounceDelay = 100) => {
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);
  const { getCurrentImageUpload, getCurrentImageEdit } = useStoreApp();

  const updateHeight = debounce(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      setHeight(height);
    }
  }, debounceDelay);

  useEffect(() => {
    if (containerRef.current) {
      updateHeight();
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [getCurrentImageUpload]);

  return { ref: containerRef, height };
};

export default useContainerSize;
