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
import panda1 from '../assets/img/panda1.jpeg';
import panda2 from '../assets/img/panda2.jpeg';
import panda3 from '../assets/img/panda3.jpeg';
import vibr1 from '../assets/img/vibr1.jpg';
import vibr2 from '../assets/img/vibr2.jpg';
import sounding1 from '../assets/img/sounding1.JPG';
import sounding2 from '../assets/img/sounding2.JPG';
import sounding3 from '../assets/img/sounding3.JPG';
import sounding4 from '../assets/img/sounding4.JPG';
import sounding5 from '../assets/img/sounding5.JPEG';
import sounding6 from '../assets/img/sounding6.JPEG';
import sounding7 from '../assets/img/sounding7.jpg';
import fuente1 from '../assets/img/fuente1.JPG';
import fuente2 from '../assets/img/fuente2.JPG';
import fuente3 from '../assets/img/fuente3.jpg';
import fuente4 from '../assets/img/fuente4.jpg';
import fuente5 from '../assets/img/fuente5.jpg';
import fuente6 from '../assets/img/fuente6.png';
import distor1 from '../assets/img/distor1.png';
import distor2 from '../assets/img/distor2.jpeg';
import compre1 from '../assets/img/compre1.png';
import compre2 from '../assets/img/compre2.png';
import compre3 from '../assets/img/compre3.png';
import compresor from '../assets/pdfs/compresor.pdf';
import diplo1 from '../assets/img/diplo1.png';


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
    { 
        year: 2018, 
        title: 'Estudios Panda', 
        description: 'Para la materia Grabación I, dictada por Amílcar Gilabert, cursamos en el mítico Estudio Panda, donde grabaron grandes artistas como Charly García', 
        imgSrc: panda3,
        modalContent: {
            title: "Estudios Panda",
            description: "Para la materia Grabación I, dictada por Amílcar Gilabert, cursamos gran parte en el mítico Estudio Panda, ubicado en el barrio de Floresta, sobre la Avenida Segurola. Este estudio es conocido por haber sido el escenario de grabación de algunos de los discos más importantes de las últimas décadas, tanto nacionales como internacionales. Entre los artistas que han trabajado allí se encuentran Charly García, Los Twist, Soda Stereo, Andrés Calamaro, Fito Páez, Sumo, Los Fabulosos Cadillacs, Los Redondos y Babasónicos.",
            images: [panda1, panda2, panda3],  // Usa un array con varias imágenes
            pdfUrl: "",
            iframeUrl: <iframe width="1250" height="703" src="https://www.youtube.com/embed/5NZUaOIeRqo" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
        }
    },
    { 
        year: 2019, 
        title: 'Modos de vibraciones en una placa', 
        description: 'Para la materia Acústica y Psicoacústica I se estudiaron los modos de vibración en una placa cuadrada, basándose en el método de Chladni.', 
        imgSrc: vibr2,
        modalContent: {
            title: "Modos de vibraciones en una placa",
            description: "Para la materia Acústica y Psicoacústica I, dictada por el Ing. de Sonido Mariano Arouxet, se estudiaron los modos de vibración en una placa cuadrada, basándose en el método de Chladni. Al excitar la placa, se observaron simetrías en las figuras generadas para cada modo de vibración. Estas simetrías dependen de la geometría, las condiciones de borde y las fuerzas aplicadas. Las placas cuadradas o circulares y homogéneas con bordes restringidos en puntos o líneas específicas permiten visualizar estos modos. La excitación se realiza desde el centro, usando un tornillo conectado a un shaker o mediante golpes mecánicos.",
            images: [vibr1, vibr2],  // Usa un array con varias imágenes
            pdfUrl: "",
            iframeUrl: <iframe width="1250" height="703" src="https://www.youtube.com/embed/d2_6NvGsmBg" title="Vibraciones placa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
        }
    },
    { 
        year: 2019, 
        title: 'Estudio de grabación SoundING', 
        description: 'Para la materia Grabación II, dictada por Daniel Osorio, tuvimos la posibilidad de cursar gran parte de la materia en el estudio de grabación SoundING.', 
        imgSrc: sounding3,
        modalContent: {
            title: "Estudio de grabación SoundING",
            description: "Para la materia Grabación II, dictada por Daniel Osorio, tuvimos la posibilidad de cursar gran parte de la materia en el estudio de grabación SoundING. Allí, estuve en contacto con equipos de grabación y edición de sonido avanzados, los utilicé y aprendí de los profesores y ayudantes de cátedra.",
            images: [sounding1, sounding2, sounding3, sounding4, sounding5, sounding6, sounding7],  // Usa un array con varias imágenes
            pdfUrl: "",
            iframeUrl: null,
        }
    },
    { 
        year: 2020, 
        title: 'Fuente partida regulada variable', 
        description: 'En la materia Laboratorio de Electrónica I, aprendí a construir circuitos y soldar componentes. Un proyecto destacado fue una Fuente Partida Regulada Variable, que utilicé en futuros trabajos académicos y proyectos personales.', 
        imgSrc: fuente5,
        modalContent: {
        title: "Fuente partida regulada variable",
        description: "Para la materia Laboratorio de Electrónica I, me introduje en la construcción de circuitos electrónicos y el soldado de componentes. Como parte de uno de los trabajos, construí una Fuente Partida Regulada Variable, que no solo fue esencial para futuros proyectos académicos, sino también para mis propios proyectos personales, brindándome una valiosa herramienta práctica.",
        images: [fuente1, fuente2, fuente3, fuente4, fuente5, fuente6],  // Usa un array con varias imágenes
        pdfUrl: "",
        iframeUrl: null,
        }
    },
    { 
        year: 2021, 
        title: 'Distorsión para guitarra', 
        description: 'Construcción de un efecto de distorsión para guitarra.', 
        imgSrc: distor2,
        modalContent: {
        title: "Distorsión para guitarra",
        description: "Para la materia Laboratorio de Electrónica II, construí como proyecto final un efecto de distorsión para guitarra alimentado por una batería de 9V.",
        images: [distor1, distor2],  // Usa un array con varias imágenes
        pdfUrl: "",
        iframeUrl: null,
        }
        },
        { 
            year: 2022, 
            title: 'Diseño de compresor de dos canales en Altium', 
            description: `Para el proyecto final de Circuitos Electrónicos II, diseñé un compresor de dos canales usando Altium, adaptado para un rack de un solo módulo.`,
            imgSrc: compre2,
            modalContent: {
              title: "Diseño de compresor de dos canales en Altium",
              description: `Como proyecto final para la materia Circuitos Electrónicos II, diseñé un compresor de dos canales en el software Altium, adaptándolo para un espacio de rack de un solo módulo. Partiendo de un circuito proporcionado por el profesor, utilicé Altium, un software de automatización de diseño electrónico para ingenieros, para el diseño de la placa de circuito impreso, aprendiendo a manejar el software en el proceso. Quisiera destacar que la finalización de este proyecto no hubiera sido posible sin la ayuda y el compañerismo de <a href="https://www.linkedin.com/in/leandro-bilbao/" target="_blank" rel="noopener noreferrer">Leandro Bilbao</a>, quien aportó un conocimiento y una organización excepcionales en el uso de Altium.`,
              images: [compre1, compre2, compre3],
              pdfUrl: compresor,
              iframeUrl: null,
            }
          },
          {
            year: 2023,
            title: 'Diplomatura en Desarrollo Web Frontend',
            description: `Realicé la Diplomatura en Desarrollo Web Frontend a través del programa Puentes del gobierno de la provincia de Buenos Aires, en colaboración entre la Universidad Nacional de Tres de Febrero y la Municipalidad de Ramallo.`,
            imgSrc: diplo1,
            modalContent: {
                title: "Diplomatura en Desarrollo Web Frontend",
                description: `En 2023, realicé la Diplomatura en Desarrollo Web Frontend a través del programa Puentes del gobierno de la provincia de Buenos Aires, en colaboración entre la Universidad Nacional de Tres de Febrero y la Municipalidad de Ramallo. Durante el curso, adquirí conocimientos en HTML, CSS, JavaScript y React, y los apliqué en tres trabajos integradores. <br>
                - HTML y CSS: <a href="https://github.com/Ju4n113/proyecto_integrador" target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a> | <a href="https://ju4n113.github.io/proyecto_integrador/" target="_blank" rel="noopener noreferrer">Visualizar proyecto</a> <br>
                - JavaScript: <a href="https://github.com/Ju4n113/Proyecto_Integrador_Final" target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a> | <a href="https://ju4n113.github.io/Proyecto_Integrador_Final/" target="_blank" rel="noopener noreferrer">Visualizar proyecto</a> <br>
                - React: <a href="https://github.com/Ju4n113/Proyecto_integrador_final_React" target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a> | <a href="https://ju4n113.github.io/Proyecto_integrador_final_React/" target="_blank" rel="noopener noreferrer">Visualizar proyecto</a> <br>
                Fue una experiencia muy enriquecedora, y este mismo portafolio web no hubiera sido lo mismo sin las herramientas valiosas adquiridas en el mundo del diseño web, que ahora combino con mi carrera en Ingeniería de Sonido.`,
                images: null,
                pdfUrl: null,
                iframeUrl: <iframe width="1250" height="703" src="https://www.youtube.com/embed/HyYldhJYfE4" title="Presentación de proyecto usando Figma." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
            }
        }
        
    // Otros ítems...
  ];
  
  export default timeLineData;
  
