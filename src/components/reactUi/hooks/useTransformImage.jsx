import { useState } from "react";
import { getCldImageUrl } from "astro-cloudinary/helpers";
import useStoreApp from "./useStoreApp";
import useDownloadImage from "../UseDownloadImage";

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
      id: publicId,
      crop,
      name: info?.original_filename,
    });
  };

  const handleGetCdlImage = ({ isUpdateImage = true, ...props }) => {
    const idImageCurrent = getCurrentImageUpload?.id;
    const crop = getCurrentImageUpload?.crop
      ? { crop: getCurrentImageUpload?.crop }
      : {};
    const body = {
      ...crop,
      ...props,
    };

    const url = getCldImageUrl({
      src: idImageCurrent,
      ...body,
    });
    if (isUpdateImage) {
      setCurrentImageEdit({ url, body, id: idImageCurrent });
      setIsLoadingImageUpload(true);
    }
    return url;
  };

  const handleDownloadImageByFormat = (format) => {
    setLoadingDownload(true);
    const url = handleGetCdlImage({
      isUpdateImage: false,
      format,
      ...getCurrentImageEdit?.body,
    });
    handleDownload(url, getCurrentImageUpload?.name, format);
  };

  return {
    handleUploadImage,
    handleGetCdlImage,
    handleDownloadImageByFormat,
    loadingDownload,
  };
}

export default useTransformImage;
