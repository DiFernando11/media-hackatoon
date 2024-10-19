import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "..";
import useStoreApp from "../../hooks/useStoreApp";

function ModalContinueEdit() {
  const { getCurrentImageUploadByLs, deleteImageUploadByLs } =
    useLocalStorage();
  const { setCurrentImageUpload } = useStoreApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <h2 className="text-lg font-bold mb-4">Hello from Modal!</h2>
      <p>This is a modal content.</p>
      <button onClick={handleContinueEdit} className="border border-red-800">
        Continuar Editando
      </button>
      <button onClick={handleEditNewImage} className="border border-red-800">
        Editar Nueva imagen
      </button>
    </Modal>
  );
}

export default ModalContinueEdit;
