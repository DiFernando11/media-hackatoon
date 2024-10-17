import React from "react";

function LoadingUpload() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid"></div>
    </div>
  );
}

export default LoadingUpload;
