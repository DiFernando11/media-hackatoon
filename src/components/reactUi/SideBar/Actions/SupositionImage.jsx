import React from "react";
import ButtonAction from "../../ButtonAction";
import useTransformImage from "../../hooks/useTransformImage";
import DropDownAction from "../../DropDownAction";

function SupositionImage() {
  const { handleSupositionImage, handleUploadImage } = useTransformImage();
  const handleGetImage = (info) => {
    console.log(info, "HACIENDO TODO");
    handleSupositionImage();
  };
  const handleAction = () => {
    handleGetImage();
    // handleUploadImage(handleGetImage);
  };
  return (
    <DropDownAction name={"Suponer Imagen"}>
      <ButtonAction
        handleAction={handleAction}
        name={"Upload Image"}
        isClickPass
      />
    </DropDownAction>
  );
}

export default SupositionImage;
