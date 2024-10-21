import React from "react";
import UploadImage from "../Actions/UploadImage";
import DeleteCurrentImageGalery from "../Actions/DeleteCurrentImageGalery";
import DeleteAllGalery from "../Actions/DeleteAllGalery";
import RenoveBackground from "../Actions/RenoveBackground";
import AddBackroundImage from "../Actions/AddBackgroundImage";
import CreateInvitation from "../Actions/CreateInvitation";

function ButtonsAction({ setComponenteKey }) {
  return (
    <>
      <UploadImage />
      <DeleteCurrentImageGalery />
      <AddBackroundImage setComponenteKey={setComponenteKey} />
      <RenoveBackground setComponenteKey={setComponenteKey} />
      <CreateInvitation setComponenteKey={setComponenteKey} />
      <DeleteAllGalery />
    </>
  );
}

export default ButtonsAction;
