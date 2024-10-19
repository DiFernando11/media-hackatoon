import { useState } from "react";
import { getCldImageUrl } from "astro-cloudinary/helpers";
import useStoreApp from "./useStoreApp";
import useDownloadImage from "../UseDownloadImage";
import { v4 as uuidv4 } from "uuid";

function useTransformImage() {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const {
    setCurrentImageUpload,
    getCurrentImageUpload,
    setIsLoadingImageUpload,
    setCurrentImageEdit,
    getCurrentImageEdit,
  } = useStoreApp();

  const handleDownload = useDownloadImage(setLoadingDownload);

  const handleUploadImage = (info) => {
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
  };

  const handleGetCdlImage = ({ isUpdateImage = true, ...props }) => {
    const publicId = getCurrentImageUpload?.publicId;
    const crop = getCurrentImageUpload?.crop
      ? { crop: getCurrentImageUpload?.crop }
      : {};
    const body = {
      ...crop,
      ...props,
    };

    const url = getCldImageUrl({
      src: publicId,
      ...body,
    });
    if (isUpdateImage) {
      setCurrentImageEdit({ url, body, id: uuidv4(), publicId });
      setIsLoadingImageUpload(true);
    }
    return url;
  };

  const handleDownloadImageByFormat = (format) => {
    setLoadingDownload(true);
    console.log(getCurrentImageEdit);
    const body = getCurrentImageUpload.isGalery
      ? getCurrentImageUpload?.body
      : getCurrentImageEdit?.body;
    // const url = handleGetCdlImage({
    //   isUpdateImage: false,
    //   format,
    //   ...body,
    // });
    // handleDownload(url, getCurrentImageUpload?.name, format);
    handleDownload(
      getCurrentImageUpload.url,
      getCurrentImageUpload?.name,
      format
    );
  };

  const handleOpenWidget = () => {
    setCurrentImageUpload({
      url: null,
      id: "id ahora",
    });
    setIsLoadingImageUpload(true);
    setTimeout(() => {
      setCurrentImageUpload({
        url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729362566/difer-images/wi24y5mhgk28t3wzzk35.webp",
        id: uuidv4(),
        publicId: "difer-images/wi24y5mhgk28t3wzzk35",
      });
    }, 2000);
    // cloudinary.openUploadWidget(
    //   {
    //     cloudName: "drkv8ebxx",
    //     uploadPreset: "upload-hackatoon-image",
    //     sources: ["local", "url"],
    //     multiple: false,
    //   },
    //   (error, result) => {
    //     if (!error && result && result.event === "success") {
    //       setSliderPosition(100);
    //       handleUploadImage(result.info);
    //       if (getCurrentImageEdit.id) {
    //         addImagesEditArray(getCurrentImageEdit);
    //         setCurrentImageEdit({});
    //       }

    //       console.log("Imagen subida exitosamente:", result.info);
    //     }
    //   }
    // );
  };

  return {
    handleUploadImage,
    handleGetCdlImage,
    handleDownloadImageByFormat,
    loadingDownload,
    handleOpenWidget
  };
}

export default useTransformImage;
