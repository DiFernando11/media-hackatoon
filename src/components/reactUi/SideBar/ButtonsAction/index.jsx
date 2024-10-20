import React from "react";
import DownloadImage from "../Actions/DownloadImage";
import UploadImage from "../Actions/UploadImage";
import DeleteCurrentImageGalery from "../Actions/DeleteCurrentImageGalery";
import DeleteAllGalery from "../Actions/DeleteAllGalery";
import RenoveBackground from "../Actions/RenoveBackground";

function ButtonsAction({ componenteKey, setComponenteKey }) {
  return (
    <>
      <DownloadImage
        componenteKey={componenteKey}
        setComponenteKey={setComponenteKey}
      />
      <UploadImage />
      <DeleteCurrentImageGalery />
      <DeleteAllGalery />
      <RenoveBackground
        componenteKey={componenteKey}
        setComponenteKey={setComponenteKey}
      />
    </>
  );
}

export default ButtonsAction;
