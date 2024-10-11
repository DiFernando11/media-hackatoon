import React, { useEffect, useState } from "react";
import { getCldImageUrl } from "astro-cloudinary/helpers";
import imgPhBg from "../../../../public/bg-ph-image.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ImageCompare from "../ImageCompare";
import useDownloadImage from "../UseDownloadImage";

const ClouWidgetReact = () => {
  const imageLoading = "/public/bg-ph-image.jpeg";
  const classDimension = "w-80 h-80";
  const [image, setImage] = useState(null);
  const [imageEdit, setImageEdit] = useState(null);
  const downloadImage = useDownloadImage();

  const handleGetCdlImage = ({ isUpdateImage = true, ...props }) => {
    const crop = image?.crop ? { crop: image?.crop } : {};
    const body = {
      ...crop,
      ...props,
    };
    const url = getCldImageUrl({
      src: image?.id,
      ...body,
    });
    isUpdateImage && setImageEdit({ url, body });
    return url;
  };

  const handleClick = () => {
    const body = {
      replaceBackground: "Add zombies to the background",
    };
    handleGetCdlImage(body);
  };

  const handleDownloadImage = (format) => {
    const url = handleGetCdlImage({
      isUpdateImage: false,
      format,
      ...imageEdit?.body,
    });
    downloadImage(url, image?.name, format);
  };

  useEffect(() => {
    const widget = document.getElementById("upload-widget");
    if (widget) {
      widget.addEventListener("clduploadwidget:success", ({ detail }) => {
        const { info } = detail || {};
        console.log({ detail });
        const coordinates = info?.coordinates?.custom?.[0];
        console.log("clduploadwidget:success hola dsads", detail);
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

        console.log({ cropImage });

        const url = getCldImageUrl({
          src: publicId,
          ...cropImage,
        });
        setImage({ url, id: publicId, crop, name: info?.original_filename });
      });
    }
  }, []);

  console.log({ image });

  return (
    <div>
      {image && (
        <div>
          <p className="text-3xl font-bold underline">Tu imagen</p>
          <div className="flex gap-5">
            <button onClick={handleClick}>CAMBIAR ZOMBIES</button>
          </div>
          <div className="flex gap-5">
            <button onClick={() => handleDownloadImage("png")}>
              Descargar Imagen PNG
            </button>
            <button onClick={() => handleDownloadImage("jpg")}>
              Descargar Imagen JPG
            </button>
            <button onClick={() => handleDownloadImage("webp")}>
              Descargar Imagen WEBP
            </button>
          </div>
          <>
            {!imageEdit ? (
              <ImageCompare
                className={classDimension}
                src={image?.url}
                alt={"Image one"}
                srcImageLoading={imageLoading}
              />
            ) : (
              <ReactCompareSlider
                className={classDimension}
                position={0}
                itemOne={
                  <ImageCompare
                    src={image?.url}
                    alt={"Image one"}
                    srcImageLoading={imageLoading}
                  />
                }
                itemTwo={
                  <ImageCompare
                    src={imageEdit?.url}
                    alt={"Image Two"}
                    srcImageLoading={imageLoading}
                  />
                }
              />
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default ClouWidgetReact;
