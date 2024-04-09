import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ title, description, imgUrl, pdfUrl, iframeUrl, onClose }) => {
  const renderContent = () => {
    return (
      <div className="project-modal-content">
        {imgUrl && <img src={imgUrl} alt={title} />}
        <p>{description}</p>
        {pdfUrl && (
          <div>
            <button className="pdf-button" onClick={() => window.open(pdfUrl, "_blank")}>
              Ver PDF
            </button>
          </div>
        )}
        {iframeUrl && (
          <div>
            {iframeUrl}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>Cerrar</button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProjectModal;
