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
  } = useStoreApp();

  const handleDownload = useDownloadImage(setLoadingDownload);

  const handleGetImageUpload = (info) => {
    console.log("AQUI HIZE UPLOAD");
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
    console.log({ isUpdateImage, ...props });
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
      quality: 1,
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
    console.log(currentUrl, getCurrentImageEdit);
    handleDownload(currentUrl, currentDownload?.name, format);
  };

  const handleUploadImage = (handleSuccess) => {
    cloudinary.openUploadWidget(
      {
        cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.PUBLIC_UPLOAD_PRESET,
        sources: ["local", "url"],
        multiple: false,
      },
      (error, result) => {
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

  const handleSetTextImage = () => {
    handleGetCdlImage({
      blur: "800",
      overlays: [
        // Título - Efecto escalofriante
        {
          position: { y: 30, x: 0, gravity: "north" }, // Posición en la parte superior
          text: {
            color: "orange", // Color típico de Halloween
            fontFamily: "Creepster", // Fuente estilo espeluznante
            fontSize: 80, // Tamaño grande para el título
            fontWeight: "black",
            text: "ENTER IF YOU DARE",
            shadow: true, // Sombra para crear un efecto más dramático
          },
        },
        // Subtítulo - Efecto fantasmal
        {
          position: { y: 0, x: 0, gravity: "center" }, // Centrado en el medio
          text: {
            color: "white", // Color fantasmal
            fontFamily: "Pirata One", // Fuente con un toque misterioso
            fontSize: 40, // Tamaño normal para el subtítulo
            fontWeight: "normal",
            text: "Halloween is near...",
            opacity: 70, // Hacemos el texto un poco transparente para un efecto etéreo
            shadow: { color: "black", offsetX: 5, offsetY: 5 }, // Sombra más pronunciada
          },
        },
        // Footer - Efecto siniestro
        {
          position: { y: 20, x: 0, gravity: "south" }, // Posición en la parte inferior
          text: {
            color: "purple", // Color misterioso
            fontFamily: "Creepster", // Fuente más destacada
            fontSize: 80, // Tamaño normal para el footer
            fontWeight: "bold",
            text: "Trick or Treat!",
          },
        },
      ],
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
  };
}

export default useTransformImage;
