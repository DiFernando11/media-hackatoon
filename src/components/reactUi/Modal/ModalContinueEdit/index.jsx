import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "..";
import useStoreApp from "../../hooks/useStoreApp";
import { useTranslation } from "react-i18next";

function ModalContinueEdit() {
  const {
    getCurrentImageUploadByLs,
    deleteImageUploadByLs,
    deleteImageEditByLs,
    setCurrentImageEditByLs,
    getCurrentImageEditByLs,
  } = useLocalStorage();
  const { t } = useTranslation();
  const { setCurrentImageUpload, setCurrentImageEdit } = useStoreApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContinueEdit = () => {
    setIsModalOpen(false);
    setCurrentImageUpload(getCurrentImageUploadByLs());
    setCurrentImageEdit(getCurrentImageEditByLs());
  };

  const handleEditNewImage = () => {
    setIsModalOpen(false);
    deleteImageUploadByLs();
    deleteImageEditByLs();
  };

  useEffect(() => {
    if (getCurrentImageUploadByLs()?.id && getCurrentImageEditByLs()?.id) {
      console.log(getCurrentImageEditByLs()?.id, 'a ver')
      setIsModalOpen(true);
    } else {
      deleteImageUploadByLs();
    }
  }, []);
  return (
    <Modal isOpen={isModalOpen} isClose={false}>
      {/* <h2 className="text-lg font-bold mb-4 text-white">Hello from Modal!</h2> */}
      <p className="text-white text-[24px] mb-5 font-general">
        {t("continueEditing")}
      </p>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handleContinueEdit}
          className="bg-containerMedia text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700"
        >
          {t("continueEditingButton")}
        </button>
        <button
          onClick={handleEditNewImage}
          className="bg-containerMedia text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-700"
        >
          {t("noContinueEditing")}
        </button>
      </div>
    </Modal>
  );
}

export default ModalContinueEdit;
