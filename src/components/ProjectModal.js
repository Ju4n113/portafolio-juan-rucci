import React from "react";
import { Document, Page } from "react-pdf";
import "./ProjectModal.css";

const ProjectModal = ({ title, description, imgUrl, pdfUrl, onClose }) => {
  const openPdfInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal">
        <div className="project-modal-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>Cerrar</button>
        </div>
        <div className="project-modal-content">
          <img src={imgUrl} alt={title} />
          <p>{description}</p>
          <div>
            <button className="pdf-button" onClick={openPdfInNewTab}>Ver PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
