import React from "react";
import Modal from "..";
import { useTranslation } from "react-i18next";

function ModalIncompatibleShare({ isOpen, setIsOpen }) {
  const { t } = useTranslation();
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <p className="text-white text-[28px] mb-5 font-general">
        {t("modalErrorShare")}
      </p>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handleClose}
          className="bg-containerMedia text-white px-6 py-3 rounded-md shadow-lg hover:bg-gray-700"
        >
          {t("close")}
        </button>
      </div>
    </Modal>
  );
}

export default ModalIncompatibleShare;
