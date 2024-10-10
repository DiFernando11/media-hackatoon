// UploadButton.jsx
import React from "react";

const UploadButton = ({ onUpload }) => {
  return (
    <button
      className="btn btn-upload"
      onClick={() => {
        console.log("Preparando para subir la imagen");
        if (onUpload) {
          onUpload(); // Llama a la función proporcionada para abrir el widget
        }
      }}
    >
      Subir imagen
    </button>
  );
};

export default UploadButton;
