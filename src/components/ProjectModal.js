import React, { useState } from "react";
import "./ProjectModal.css";

const ProjectModal = ({ title, description, imgUrl, images, pdfUrl, iframeUrl, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para navegar entre las imágenes de la galería
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  // Determina si hay una galería de imágenes
  const hasGallery = images && images.length > 0;

  // Renderiza el contenido del modal
  const renderContent = () => {
    return (
      <div className="project-modal-content">
        {hasGallery ? (
          <div className="image-slider">
            <button className="slider-arrow prev" onClick={prevImage}>&lt;</button>
            <img src={images[currentIndex]} alt={title} />
            <button className="slider-arrow next" onClick={nextImage}>&gt;</button>
          </div>
        ) : (
          imgUrl && <img src={imgUrl} alt={title} />
        )}
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
