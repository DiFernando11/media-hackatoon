import React, { useState } from "react";
import ButtonAction from "../../../ButtonAction";
import useStoreApp from "../../../hooks/useStoreApp";
import ModalIncompatibleShare from "../../../Modal/ModalIncompatibleShare";
import { useTranslation } from "react-i18next";

function ShareImage() {
  const { getCurrentImageEdit, getLoadingImageUpload, getCurrentImageUpload } =
    useStoreApp();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const currentShare = getCurrentImageUpload.isGalery
          ? getCurrentImageUpload
          : getCurrentImageEdit;
        await navigator.share({
          title: "Esta es una imagen compartida",
          text: "imagen compartida",
          url: currentShare.url,
        });
      } catch (error) {
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }
  };

  const isCurrentImageEdit =
    (!getCurrentImageEdit.id || getLoadingImageUpload) &&
    !getCurrentImageUpload.isGalery;

  if (isCurrentImageEdit) return null;

  return (
    <>
      <ModalIncompatibleShare isOpen={isOpen} setIsOpen={setIsOpen} />
      <ButtonAction
        name={t("shareImage")}
        isClickPass
        handleAction={handleShare}
      />
    </>
  );
}

export default ShareImage;
