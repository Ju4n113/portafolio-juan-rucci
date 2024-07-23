import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export const ProjectCard = ({ title, description, imgSrc, modalContent }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <div className="proj-imgbx">
          <img src={imgSrc} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
      {showModal && (
        <ProjectModal
          title={title}
          imgUrl={imgSrc}
          images={modalContent.images}
          description={modalContent.description}
          pdfUrl={modalContent.pdfUrl}
          iframeUrl={modalContent.iframeUrl} // Pasamos la URL del iframe al ProjectModal
          onClose={closeModal}
        />
      )}
    </>
  );
};
