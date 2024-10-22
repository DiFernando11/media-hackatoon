import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import useStoreApp from "../../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function ActionAddBackground() {
  const { handleSupositionImage, handleUploadImage } = useTransformImage();
  const { t } = useTranslation();
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
        {t("selectBgImage")}
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
          name={t('editBg')}
          isClickPass
        />
      )}
      <div className="mt-4">
        <p className="text-white mb-2 font-general-md -text-xs-1 leading-5">
          {t("selectYourImage")}
        </p>
        <ButtonAction
          handleAction={handleAction}
          name={t('uploadBgImage')}
          isClickPass
        />
      </div>
    </>
  );
}

export default ActionAddBackground;
