import React, { useEffect, useState } from "react";
import { getCldImageUrl } from "astro-cloudinary/helpers";
import imgPhBg from "../../../../public/bg-ph-image.jpeg";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ImageCompare from "../ImageCompare";

const ClouWidgetReact = () => {
  const imageLoading = "/public/bg-ph-image.jpeg";
  const classDimension = "w-80 h-80";
  const [image, setImage] = useState(null);
  const [imageEdit, setImageEdit] = useState(null);

  const handleClick = () => {
    const url = getCldImageUrl({
      src: image?.id,
      replaceBackground: "Add zombies to the background",
      crop: {
        width: 500,
        height: 500,
        type: "thumb",
        source: true,
      },
    });
    setImageEdit({ id: image?.id, url });
  };
  const handleClickGhost = () => {
    const url = getCldImageUrl({
      src: image?.id,

      //   replaceBackground: "Add ghosts to the background",
      overlays: [
        {
          position: {
            y: 40,
            x: -10,
            gravity: "south",
          },
          text: {
            color: "magenta",
            fontFamily: "Source Sans Pro",
            fontSize: 160,
            fontWeight: "black",
            text: "OUT OF THIS WORLD",
          },
        },
        {
          position: {
            y: 50,
            gravity: "south",
          },
          text: {
            color: "white",
            fontFamily: "Source Sans Pro",
            fontSize: 160,
            fontWeight: "black",
            text: "OUT OF THIS WORLD",
          },
        },
      ],
    });
    setImageEdit({ id: image?.id, url });
  };

  useEffect(() => {
    const widget = document.getElementById("upload-widget");
    if (widget) {
      widget.addEventListener("clduploadwidget:success", ({ detail }) => {
        const { info } = detail || {};
        const coordinates = info?.coordinates?.custom?.[0];
        console.log("clduploadwidget:success hola dsads", detail);

        const detailCropX = coordinates?.[0];
        const detailCropY = coordinates?.[1];
        const detailCropWidth = coordinates?.[2];
        const detailCropHeight = coordinates?.[3];
        const publicId = info.public_id ?? "";
        const cropImage = info?.coordinates
          ? {
              crop: {
                width: detailCropWidth,
                x: detailCropX,
                y: detailCropY,
                height: detailCropHeight,
                type: "crop",
                source: true,
              },
            }
          : {};

        console.log({ cropImage });

        const url = getCldImageUrl({
          src: publicId,
          ...cropImage,
        });
        setImage({ url, id: publicId });
      });
    }
  }, []);

  console.log({ image });

  return (
    <div>
      {/* <ReactCompareSlider
        position={5}
        className={classDimension}
        itemOne={
          <ReactCompareSliderImage src={imageLoading} alt={"Image one"} />
        }
        itemTwo={
          <ReactCompareSliderImage src={imageLoading} alt={"Image Two"} />
        }
      /> */}
      {image && (
        <div>
          <p className="text-3xl font-bold underline">Tu imagen</p>
          <div className="flex gap-5">
            <button onClick={handleClick}>CAMBIAR ZOMBIES</button>
            <button onClick={handleClickGhost}>CAMBIAR Fantasmas</button>
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
