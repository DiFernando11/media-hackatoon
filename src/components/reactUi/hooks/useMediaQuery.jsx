import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

function useMediaQuery() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = debounce(() => setWidth(window.innerWidth), 200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useMediaQuery;
