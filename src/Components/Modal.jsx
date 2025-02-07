/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./CSS/Modal.css"; // Importera stilfilen för modal


function Modal({ title, text, text2, image1, image2, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-images">
          <img src={image1} alt="Bild 1" className="modal-image" />
          <img src={image2} alt="Bild 2" className="modal-image" />
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{text}</p>
        <p className="modal-text">{text2}</p>
        <button className="modal-close" onClick={onClose}>
          Stäng
        </button>
      </div>
    </div>
  );
}

export default Modal;
