import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from 'react';

const VideoSection = () => {
  return (
    <section id="presentation" className="projectVideo">
      <Container>
        <h2>Video de Presentación</h2>
        <p>Aquí dejo un video de presentación:</p>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/mQAkyiGMEOo"
          title="Presentación Juan Martín Rucci"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>
    </section>
  );
};

export default VideoSection;
