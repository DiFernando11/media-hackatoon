import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useTransformImage from "../../../hooks/useTransformImage";
import { useTranslation } from "react-i18next";

function ActionDownload() {
  const [currentFormat, setCurrentFormat] = useState(null);
  const { t } = useTranslation();
  const { handleDownloadImageByFormat, loadingDownload } = useTransformImage();

  const formats = {
    jpg: "jpg",
    png: "png",
    webp: "webp",
    avif: "avif",
  };

  const handleAction = (format) => {
    setCurrentFormat(format);
    handleDownloadImageByFormat(format);
  };

  const removeButton = (format) => loadingDownload && currentFormat === format;
  return (
    <>
      <p className="font-general -text-xs-1 text-white">{t("downloadImage")}</p>
      <ButtonAction
        name={". JPG"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.jpg)}
        removeButton={removeButton(formats.jpg)}
      />
      <ButtonAction
        name={". PNG"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.png)}
        removeButton={removeButton(formats.png)}
      />
      <ButtonAction
        name={". WEBP"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.webp)}
        removeButton={removeButton(formats.webp)}
      />
      <ButtonAction
        name={". AVIF"}
        isLoading={loadingDownload}
        handleAction={() => handleAction(formats.avif)}
        removeButton={removeButton(formats.avif)}
      />
    </>
  );
}

export default ActionDownload;
