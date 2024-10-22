import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "..";
import useStoreApp from "../../hooks/useStoreApp";
import useTransformImage from "../../hooks/useTransformImage";

function ModalContinueEdit() {
  const { getCurrentImageUploadByLs, deleteImageUploadByLs } =
    useLocalStorage();
  const { handleGetNormalImage } = useTransformImage();
  const { setCurrentImageUpload, getSelectedTopic } = useStoreApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const currentTopic = getSelectedTopic();

  const handleContinueEdit = () => {
    setIsModalOpen(false);
    setCurrentImageUpload(getCurrentImageUploadByLs());
  };

  const handleEditNewImage = () => {
    setIsModalOpen(false);
    deleteImageUploadByLs();
  };

  useEffect(() => {
    if (getCurrentImageUploadByLs()?.id) {
      setIsModalOpen(true);
    }
  }, []);
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {/* <h2 className="text-lg font-bold mb-4 text-white">Hello from Modal!</h2> */}
      <p className="text-white text-[24px] mb-5 font-general">
        ¡Hey, dejaste tu imagen a medias! ¿Quieres seguir editándola?
      </p>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handleContinueEdit}
          className="bg-containerMedia text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700"
        >
          Seguir editando la imagen
        </button>
        <button
          onClick={handleEditNewImage}
          className="bg-containerMedia text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-700"
        >
          No, ya terminé
        </button>
      </div>
    </Modal>
  );
}

export default ModalContinueEdit;
