import React, { useRef } from "react";

export default function Modal({ title, children, onClose }) {
  const contentRef = useRef(null);

  function handleBackdropClick(e) {
    if (contentRef.current && contentRef.current.contains(e.target)){
         return;
    }
    onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-gray-500/50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div ref={contentRef} className="bg-white rounded p-4 w-96">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}