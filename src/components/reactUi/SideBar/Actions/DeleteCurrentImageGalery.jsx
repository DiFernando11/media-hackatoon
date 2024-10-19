import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import ButtonAction from "../../ButtonAction";

function DeleteCurrentImageGalery() {
  const {
    getCurrentImageUpload,
    deleteImagesEditArray,
    setCurrentImageUpload,
    getLastCurrentImageUpload,
    getImagesEditArray,
  } = useStoreApp();
  const handleDeleteImageGalery = (id) => {
    const currentsImage = deleteImagesEditArray(id);
    setCurrentImageUpload(
      currentsImage.length === 0 ? getLastCurrentImageUpload : currentsImage[0]
    );
  };
  if (!getCurrentImageUpload.isGalery) return null;
  return (
    <ButtonAction
      name="Eliminar esta imagen"
      handleAction={() => handleDeleteImageGalery(getCurrentImageUpload.id)}
    />
  );
}

export default DeleteCurrentImageGalery;
