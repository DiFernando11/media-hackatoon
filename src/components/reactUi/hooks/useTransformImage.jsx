import { getCldImageUrl } from "astro-cloudinary/helpers";
import useStoreApp from "./useStoreApp";

function useTransformImage() {
  const {
    setCurrentImageUpload,
    getCurrentImageUpload,
    setisLoadingImageUpload,
  } = useStoreApp();
  const handleUploadImage = (detail) => {
    const { info } = detail || {};
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
    setisLoadingImageUpload(true);
    setCurrentImageUpload({
      url,
      id: publicId,
      crop,
      name: info?.original_filename,
    });
  };

  return {
    handleUploadImage,
  };
}

export default useTransformImage;
