import { useState } from "react";
import { getCldImageUrl } from "astro-cloudinary/helpers";
import useStoreApp from "./useStoreApp";
import useDownloadImage from "../UseDownloadImage";
import { v4 as uuidv4 } from "uuid";

function useTransformImage() {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const [saveDownloads, setSaveDownloads] = useState({});
  const {
    setCurrentImageUpload,
    getCurrentImageUpload,
    setIsLoadingImageUpload,
    setCurrentImageEdit,
    getCurrentImageEdit,
    addImagesEditArray,
    setSliderPosition,
    setIsLoadingAllPage,
  } = useStoreApp();

  const handleDownload = useDownloadImage(setLoadingDownload);

  const handleGetImageUpload = (info) => {
    const coordinates = info?.coordinates?.custom?.[0];
    const detailCropX = coordinates?.[0];
    const detailCropY = coordinates?.[1];
    const detailCropWidth = coordinates?.[2];
    const detailCropHeight = coordinates?.[3];
    const publicId = info.public_id ?? "";
    const crop = {
      width: detailCropWidth,
      x: detailCropX,
      y: detailCropY,
      height: detailCropHeight,
      type: "crop",
      source: true,
    };
    const cropImage = info?.coordinates ? { crop } : {};
    const url = getCldImageUrl({
      src: publicId,
      quality: 1,
      format: "webp",
      ...cropImage,
    });
    setIsLoadingImageUpload(true);
    setCurrentImageUpload({
      url,
      id: uuidv4(),
      publicId,
      crop,
      name: info?.original_filename,
    });
    setSliderPosition(1);
    if (getCurrentImageEdit.id) {
      addImagesEditArray(getCurrentImageEdit);
      setCurrentImageEdit({});
    }
  };

  const handleGetCdlImage = ({ isUpdateImage = true, ...props }) => {
    setIsLoadingAllPage(true);
    const publicId = getCurrentImageUpload?.publicId;
    const nameImage = getCurrentImageUpload?.name;
    const crop = getCurrentImageUpload?.crop
      ? { crop: getCurrentImageUpload?.crop }
      : {};
    const body = {
      ...crop,
      ...props,
    };

    const url = getCldImageUrl({
      src: publicId,
      quality: 100,
      format: "webp",
      ...body,
    });
    if (isUpdateImage) {
      if (getCurrentImageEdit?.id) {
        addImagesEditArray(getCurrentImageEdit);
      }
      setCurrentImageEdit({
        url,
        body,
        id: uuidv4(),
        publicId,
        name: nameImage,
      });
      setIsLoadingImageUpload(true);
    }
    return url;
  };

  const handleDownloadImageByFormat = (format) => {
    setLoadingDownload(true);
    const currentDownload = getCurrentImageUpload.isGalery
      ? getCurrentImageUpload
      : getCurrentImageEdit;
    let currentUrl = "";
    const existedUrl = saveDownloads?.[currentDownload.id]?.[format];
    if (!existedUrl) {
      currentUrl = handleGetCdlImage({
        isUpdateImage: false,
        format,
        ...currentDownload?.body,
      });
      setSaveDownloads({
        ...saveDownloads,
        [currentDownload.id]: {
          ...saveDownloads?.[currentDownload.id],
          [format]: currentUrl,
        },
      });
    } else {
      currentUrl = existedUrl;
    }
    handleDownload(currentUrl, currentDownload?.name, format);
  };

  const handleUploadImage = (handleSuccess) => {
    setIsLoadingAllPage(true);
    cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url"],
        multiple: false,
        cropping: true,
        croppingAspectRatio: 1.0,
        croppingShowDimensions: true,
        text: {
          es: {
            local: {
              dd_title_single: "Selecciona una nueva imagen",
            },
          },
        },
      },
      (error, result) => {
        setIsLoadingAllPage(false);
        if (!error && result && result.event === "success") {
          handleSuccess(result.info);
        }
      }
    );
  };

  const handleOpenWidget = () => {
    handleUploadImage(handleGetImageUpload);
  };

  const handleSupositionImage = (underlay) => {
    const body = {
      removeBackground: true,
      underlay,
    };
    handleGetCdlImage(body);
  };

  const handleSetTextImage = (textInputs, openSection) => {
    const body = openSection?.body
      ? [
          {
            position: { y: 0, x: 0, gravity: "center" },
            text: {
              color: textInputs.colorBody,
              fontFamily: "Pirata One",
              fontSize: textInputs.fontSizeBody,
              fontWeight: "normal",
              text: textInputs.textBody,
              shadow: { color: "black", offsetX: 5, offsetY: 5 },
            },
          },
        ]
      : [];

    const footer = openSection.footer
      ? [
          {
            position: { y: 20, x: 0, gravity: "south" },
            text: {
              color: textInputs.colorFooter,
              fontFamily: "Creepster",
              fontSize: textInputs.fontSizeFooter,
              fontWeight: "bold",
              text: textInputs.textFooter,
            },
          },
        ]
      : [];

    const overlays = [
      // Header
      {
        position: { y: 30, x: 0, gravity: "north" },
        text: {
          color: textInputs.colorHeader,
          fontFamily: "Creepster",
          fontSize: textInputs.fontSizeHeader,
          fontWeight: "black",
          text: textInputs.textHeader,
          shadow: true,
        },
      },
      // body
      ...body,
      // Footer
      ...footer,
    ];
    handleGetCdlImage({
      blur: "800",
      overlays,
    });
  };

  const handleTransformFace = (mask) => {
    handleGetCdlImage({
      replace: {
        to: mask,
        from: "face",
      },
    });
  };

  return {
    handleUploadImage,
    handleGetImageUpload,
    handleGetCdlImage,
    handleDownloadImageByFormat,
    loadingDownload,
    handleOpenWidget,
    handleSupositionImage,
    handleSetTextImage,
    handleTransformFace,
  };
}

export default useTransformImage;
