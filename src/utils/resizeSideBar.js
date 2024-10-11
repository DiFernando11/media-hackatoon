import { isSmMQ, MAX_SIZE_SIDE_BAR, MIN_SIZE_SIDE_BAR } from "./constants";

export const initResize = () => {
    const sidebar = document.getElementById("sideBarApp");
    const resizeBar = document.getElementById("resize-bar");
    let isResizing = false;
    if (!resizeBar || !sidebar) return;
    const setSidebarWidth = () => {
      const windowWidth = window.innerWidth;
      if (isSmMQ(windowWidth)) return;
      const minWidth = windowWidth * MIN_SIZE_SIDE_BAR;
      const maxWidth = windowWidth * MAX_SIZE_SIDE_BAR;
      const currentWidth = parseFloat(getComputedStyle(sidebar).width);
      sidebar.style.width = `${Math.min(Math.max(currentWidth, minWidth), maxWidth)}px`;
    };
    resizeBar.addEventListener("mousedown", function (e) {
      isResizing = true;
      document.body.style.cursor = "ew-resize";
    });
  
    document.addEventListener("mousemove", function (e) {
      if (!isResizing) return;
      const windowWidth = window.innerWidth;
      if (isSmMQ(windowWidth)) {
        isResizing = false;
        return;
      }
      const newWidth = windowWidth - e.clientX;
      const minWidth = windowWidth * MIN_SIZE_SIDE_BAR;
      const maxWidth = windowWidth * MAX_SIZE_SIDE_BAR;
      sidebar.style.width = `${Math.min(Math.max(newWidth, minWidth), maxWidth)}px`;
    });
  
    document.addEventListener("mouseup", function () {
      isResizing = false;
      document.body.style.cursor = "default";
    });
  
    window.addEventListener("resize", setSidebarWidth);
    setSidebarWidth();
  
    return () => {
      resizeBar.removeEventListener("mousedown", this);
      document.removeEventListener("mousemove", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", setSidebarWidth);
    };
  };
  