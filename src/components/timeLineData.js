// timeLineData.js

import tintoYLaSangre from '../assets/img/tintoYLaSangre.png';
import tintoYLaSangre2 from '../assets/img/tintoYLaSangre2.jpg';
import casam1 from '../assets/img/casam1.jpg';
import casam2 from '../assets/img/casam2.jpg';
import casam3 from '../assets/img/casam3.jpg';
import casam4 from '../assets/img/casam4.jpg';
import casam5 from '../assets/img/casam5.jpg';
import casam6 from '../assets/img/casam6.jpg';
import casam7 from '../assets/img/casam7.jpg';
import casam8 from '../assets/img/casam8.jpg';
import casam9 from '../assets/img/casam9.jpg';
import casam10 from '../assets/img/casam10.jpg';
import lomaNegra1 from '../assets/img/lomaNegra1.jpg';
import lomaNegra2 from '../assets/img/lomaNegra2.jpg';
import lomaNegra3 from '../assets/img/lomaNegra3.jpg';
import iSon1 from '../assets/img/iSon1.jpg';
import iSon2 from '../assets/img/iSon2.jpeg';
import iSon3 from '../assets/img/iSon3.jpg';
import iSon4 from '../assets/img/iSon4.webp';

const timeLineData = [
    { 
    year: 2014, 
    title: 'Dúo Martinez-Rucci', 
    description: 'Dúo de cámara integrado por Catalina Martínez - Soprano y yo como pianista.', 
    imgSrc: casam2,
    modalContent: {
        title: "Dúo Martinez-Rucci",
        description: "Formé parte de un dúo de cámara con Catalina Martínez, soprano, con el que hemos tocado en diversos casamientos, ofreciendo un toque especial a cada celebración.",
        images: [casam8, casam9, casam10, casam7, casam6, casam5, casam4, casam3, casam2, casam1],  // Usa un array con la imagen principal
        pdfUrl: "",
        iframeUrl: null,
    }
    },
    { 
    year: 2015, 
    title: 'Festival Non Stop - Tinto y La Sangre', 
    description: 'Presentación en el Festival Non Stop en Ramallo, provincia de Buenos Aires, donde interpretamos "Año de peste" con la banda "El Tinto y La Sangre" de la que fuí pianista.', 
    imgSrc: tintoYLaSangre,
    modalContent: {
        title: "Festival Non Stop - Tinto y La Sangre",
        description: `Fuí pianista de la banda "El Tinto y La Sangre", una formación liderada por Omar "Tinto" Cartier, junto a Albano González Cartier en la batería, Juan Manuel Franzia en el bajo y Sebastian Hattemer en la guitarra eléctrica. Uno de nuestros momentos destacados fue la presentación en el Festival Non Stop en Ramallo, provincia de Buenos Aires, donde interpretamos "Año de peste", una canción con letra de Omar Cartier y música de Edgardo Gonzalez y Gustavo Girves, dedicada a los caídos en la guerra de Malvinas.`,
        images: [tintoYLaSangre2, tintoYLaSangre],  // Usa un array con varias imágenes
        pdfUrl: "",
        iframeUrl: <iframe width="1250" height="703" src="https://www.youtube.com/embed/HmZdVEjyan8" title="FESTIVAL NON STOP -- Tinto y La Sangre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    }
    },
    { 
        year: 2016, 
        title: 'Pasante en Loma Negra SA ', 
        description: 'Entre Junio de 2016 y Agosto de 2016 realicé una pasantía en Loma Negra SA.', 
        imgSrc: lomaNegra1,
        modalContent: {
            title: "Pasante en Loma Negra SA ",
            description: `Durante mi último año de la escuela secundaria técnica, tuve la oportunidad de realizar prácticas profesionales en Loma Negra SA. Durante esta pasantía, participé en diversas tareas tanto de campo como administrativas, adquiriendo valiosa experiencia y habilidades prácticas. Mis responsabilidades incluyeron: mediciones de grosor de tolvas, relevamiento de materiales en disposición, ejecución de diversas tareas administrativas, entre otras.`,
            images: [lomaNegra2, lomaNegra1, lomaNegra3],  // Usa un array con varias imágenes
            pdfUrl: "",
            iframeUrl: null,
        }
        },
        { 
            year: 2017, 
            title: 'Ingeniería de Sonido', 
            description: 'Comienzo la carrera de Ingeniería de Sonido en la Universidad Nacional de Tres de Febrero.', 
            imgSrc: iSon4,
            modalContent: {
                title: "Ingeniería de Sonido",
                description: "Con gran entusiasmo, me mudé a Caseros, en la provincia de Buenos Aires, para iniciar mis estudios en la carrera de Ingeniería de Sonido.",
                images: [iSon1, iSon2, iSon3, iSon4],  // Usa un array con varias imágenes
                pdfUrl: "",
                iframeUrl: null,
            }
            },
    // Otros ítems...
  ];
  
  export default timeLineData;
  
