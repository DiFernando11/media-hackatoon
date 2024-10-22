import React, { useState } from "react";
import UploadImage from "../Actions/UploadImage";
import DeleteCurrentImageGalery from "../Actions/DeleteCurrentImageGalery";
import DeleteAllGalery from "../Actions/DeleteAllGalery";
import RenoveBackground from "../Actions/RenoveBackground";
import AddBackroundImage from "../Actions/AddBackgroundImage";
import CreateInvitation from "../Actions/CreateInvitation";
import TransformFace from "../Actions/TransformFace";
import DownloadImage from "../Actions/DownloadImage";
import ShareImage from "../Actions/ShareImage";
import ChangeIdioma from "../Actions/ChangeIdioma";

function ButtonsAction({ setComponenteKey }) {
  return (
    <>
      <UploadImage />
      <DownloadImage setComponenteKey={setComponenteKey} />
      <ShareImage />
      <DeleteCurrentImageGalery />
      <AddBackroundImage setComponenteKey={setComponenteKey} />
      <RenoveBackground setComponenteKey={setComponenteKey} />
      <TransformFace setComponenteKey={setComponenteKey} />
      <CreateInvitation setComponenteKey={setComponenteKey} />
      <ChangeIdioma />
      <DeleteAllGalery />
    </>
  );
}

export default ButtonsAction;
