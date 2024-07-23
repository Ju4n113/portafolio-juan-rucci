import React, { useState, useEffect } from 'react';
import TimeLineItem from './TimeLineItem';
import '../App.css';  // Asegúrate de que el archivo CSS esté importado
import timeLineData from './timeLineData';  // Importa los datos desde el nuevo archivo

const TimeLine = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos'); // Estado para la categoría seleccionada

  useEffect(() => {
    const timeline = document.querySelector('.timeline');
    let angle = 0;

    function rotateGradient() {
      angle = (angle + 1) % 360;
      timeline.style.background = `linear-gradient(${angle}deg, var(--primary-color) 15%, var(--secondary-color) 125%)`;
    }

    const duration = 45000; // Duración total del ciclo en milisegundos (45 segundos)
    const interval = duration / 360; // Intervalo de tiempo para cada grado de rotación

    const timer = setInterval(rotateGradient, interval);

    return () => {
      clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  // Filtra los datos según la categoría seleccionada
  const filteredData = selectedCategory === 'Todos' 
    ? timeLineData 
    : timeLineData.filter(item => item.categories.includes(selectedCategory));

  return (
    <div className="timeline-container">
      <div className="timeline-buttons">
        {['Todos', 'Experiencia Laboral', 'Estudios', 'Ingenieria de Sonido', 'Personal'].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="timeline">
        {filteredData.map((item, index) => (
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
