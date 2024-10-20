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
    if (getCurrentImageEdit.id) {
      addImagesEditArray(getCurrentImageEdit);
      setCurrentImageEdit({});
    }
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
    const currentDownload = getCurrentImageUpload.isGalery
      ? getCurrentImageUpload
      : getCurrentImageEdit;
    handleDownload(currentDownload.url, currentDownload?.name, format);
  };

  const handleUploadImage = (handleSuccess) => {
    cloudinary.openUploadWidget(
      {
        cloudName: "drkv8ebxx",
        uploadPreset: "upload-hackatoon-image",
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
    // setCurrentImageUpload({
    //   url: null,
    //   id: "id ahora",
    // });
    // setIsLoadingImageUpload(true);
    // setTimeout(() => {
    //   setCurrentImageUpload({
    //     url: "https://res.cloudinary.com/drkv8ebxx/image/upload/v1729362566/difer-images/wi24y5mhgk28t3wzzk35.webp",
    //     id: uuidv4(),
    //     publicId: "difer-images/wi24y5mhgk28t3wzzk35",
    //   });
    // }, 2000);
    handleUploadImage(handleGetImageUpload);
  };

  const handleSupositionImage = (underlay) => {
    // console.log({ underlay });
    const body = {
      removeBackground: true,
      background: "blueviolet",
      // underlay,
    };
    handleGetCdlImage(body);
  };

  const handleCreateInvitation = () =>{
    
  }

  return {
    handleUploadImage,
    handleGetImageUpload,
    handleGetCdlImage,
    handleDownloadImageByFormat,
    loadingDownload,
    handleOpenWidget,
    handleSupositionImage,
  };
}

export default useTransformImage;
