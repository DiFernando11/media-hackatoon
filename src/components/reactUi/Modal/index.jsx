import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children, isClose = true }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-80" />
      <div className="bg-modal p-6 rounded-lg shadow-lg z-10 relative">
        {isClose && (
          <button
            className="absolute top-2 right-2 text-white"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
