import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de importar el archivo CSS

const VideoSection = () => {
  return (
    <section id="presentation" className="projectVideo">
      <div className="video-container">
        <h2>Video de Presentación</h2>
        <p>Aquí dejo un video de presentación:</p>
        <iframe
          src="https://www.youtube.com/embed/mQAkyiGMEOo"
          title="Presentación Juan Martín Rucci"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/timeline" className="timeline-link">
        <div className="project-timeline-container">
          <div className="project-timeline-box">
            <div className="project-timeline-box-content">
              <h2>Visita la Línea de Tiempo</h2>
              <p>En esta sección, explora cronológicamente los momentos más destacados de mi carrera y descubre lo que implica la Ingeniería de Sonido.</p>
              <button className="project-timeline-button">
                Ir al Time Line
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default VideoSection;
