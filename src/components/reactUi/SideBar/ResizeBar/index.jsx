import {
  ArrowLeftCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function ResizeBar() {
  return (
    <div
      id="resize-bar"
      className="cursor-ew-resize w-2 h-full bg-gray-400 absolute top-0 left-0 hidden sm:block"
    >
      <span className="flex justify-start items-center w-5 h-5 absolute top-1/2 -right-1.5 rounded-full bg-gray-400">
        <ChevronLeftIcon className="size-3" />
        <ChevronRightIcon className="size-3" />
      </span>
    </div>
  );
}

export default ResizeBar;
