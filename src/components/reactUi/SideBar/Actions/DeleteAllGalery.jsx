import React from "react";
import useStoreApp from "../../hooks/useStoreApp";
import ButtonAction from "../../ButtonAction";

function DeleteAllGalery() {
  const {
    getImagesEditArray,
    deleteAllImagesEditArray,
    getLastCurrentImageUpload,
    setCurrentImageUpload,
    getCurrentImageUpload,
  } = useStoreApp();
  const handleDeleteAllImagesGalery = () => {
    deleteAllImagesEditArray();
    if (getLastCurrentImageUpload.id) {
      setCurrentImageUpload(getLastCurrentImageUpload);
    }
  };
  if (getImagesEditArray.length === 0) return null;
  return (
    <ButtonAction
      name="Eliminar mi galeria"
      handleAction={handleDeleteAllImagesGalery}
    />
  );
}

export default DeleteAllGalery;
