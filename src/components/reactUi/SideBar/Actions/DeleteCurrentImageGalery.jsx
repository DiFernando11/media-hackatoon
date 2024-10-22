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
    deleteImagesEditArray(id);
    setCurrentImageUpload(
      getLastCurrentImageUpload.id
        ? getLastCurrentImageUpload
        : getCurrentImageUpload
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
