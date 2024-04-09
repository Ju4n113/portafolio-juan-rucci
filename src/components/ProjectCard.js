import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ProjectModal from "./ProjectModal";

export const ProjectCard = ({ title, description, imgUrl, pdfUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Col xs={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={openModal}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
      {showModal && (
        <ProjectModal
          title={title}
          imgUrl={imgUrl}
          description={description}
          pdfUrl={pdfUrl}
          onClose={closeModal}
        />
      )}
    </>
  );
};