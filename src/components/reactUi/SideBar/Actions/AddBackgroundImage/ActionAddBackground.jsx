import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";

function ActionAddBackground() {
  const { handleSupositionImage, handleUploadImage } = useTransformImage();
  const [urlSelected, setUrlSelected] = useState(null);
  const { getSelectedTopic } = useStoreApp();
  const currentTopic = getSelectedTopic();

  const handleActionEditBg = () => {
    handleSupositionImage(urlSelected.publicId);
  };

  const handleReciveParams = (info) => {
    const publicId = info.public_id ?? "";
    handleSupositionImage(publicId);
  };
  const handleAction = () => {
    setUrlSelected(null);
    handleUploadImage(handleReciveParams);
  };

  const handleSelectedImageDefault = (url) => setUrlSelected(url);

  return (
    <>
      <p className="text-white font-general-md -text-xs-1 leading-5">
        Selecciona una imagen de fondo predeterminada.
      </p>
      <div className="grid grid-cols-3 gap-4 items-center">
        {currentTopic.imageDefaultBg?.map((img) => (
          <img
            onClick={() => handleSelectedImageDefault(img)}
            key={img.publicId}
            className={`w-full cursor-pointer transition-all duration-300 border ${
              urlSelected?.publicId === img.publicId ? "h-20 shadow-lg" : "h-16"
            }`}
            src={img.url}
            style={{
              borderColor: currentTopic.bgColor.secondary,
            }}
            alt="fondo por defecto"
          />
        ))}
      </div>

      {urlSelected && (
        <ButtonAction
          handleAction={handleActionEditBg}
          name={"Editar fondo"}
          isClickPass
        />
      )}
      <div className="mt-4">
        <p className="text-white mb-2 font-general-md -text-xs-1 leading-5">
          Selecciona tu propia imagen.
        </p>
        <ButtonAction
          handleAction={handleAction}
          name={"Subir imagen de fondo"}
          isClickPass
        />
      </div>
    </>
  );
}

export default ActionAddBackground;
