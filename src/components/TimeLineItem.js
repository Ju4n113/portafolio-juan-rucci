import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import '../App.css';  // Asegúrate de tener los estilos necesarios

function TimeLineItem({ year, title, description, imgSrc, modalContent }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="timeline-item">
        <div className="timeline-content" onClick={openModal}>
          <div className="timeline-title">{title}</div>
          <p>{description}</p>
        </div>
        <div className="timeline-year" onClick={openModal}>{year}</div>
        <div className="timeline-iconContainer">
        <div className="timeline-icon" onClick={openModal}>
          <img src={imgSrc} alt={title} />
        </div>
        </div>
      </div>
      {showModal && (
        <ProjectModal
          title={modalContent.title}
          description={modalContent.description}
          imgUrl={imgSrc}  // Usa la imagen principal aquí
          images={modalContent.images}  // Pasa las imágenes de la galería aquí
          pdfUrl={modalContent.pdfUrl}
          iframeUrl={modalContent.iframeUrl}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default TimeLineItem;
