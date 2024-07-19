// TimeLine.js

import React, { useEffect } from 'react';
import TimeLineItem from './TimeLineItem';
import '../App.css';  // Agrega estilos personalizados aquí
import timeLineData from './timeLineData';  // Importa los datos desde el nuevo archivo

const TimeLine = () => {

  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    let angle = 0;

    function rotateGradient() {
      angle = (angle + 1) % 360;
      timeline.style.background = `linear-gradient(${angle}deg, var(--primary-color) 15%, var(--secondary-color) 125%)`;
    }

    const duration = 45000; // Duración total del ciclo en milisegundos (30 segundos)
    const interval = duration / 360; // Intervalo de tiempo para cada grado de rotación

    const timer = setInterval(rotateGradient, interval);

    return () => {
      clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div className="timeline-container">
      <div className="timeline">
        {timeLineData.map((item, index) => (
          <TimeLineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            modalContent={item.modalContent}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
