import projImg1 from "../assets/img/portadaNicolo.png";
import projImg2 from "../assets/img/portadaSoftware.png";
import projImg3 from "../assets/img/portadaControl.png";
import projectPdf from "../assets/pdfs/nicolo.pdf";
import projectPdf2 from "../assets/pdfs/software.pdf";
import projectPdf3 from "../assets/pdfs/control.pdf";
import proj2Img1 from "../assets/img/infrasonido.png";
import proj2Img2 from "../assets/img/claseDtac.png";
import project2Pdf1 from "../assets/pdfs/infrasonido.pdf";

// Importa el iframe
const iframeUrl = <iframe width="866" height="487" src="https://www.youtube.com/embed/y2VKRNF3uik" title="claseDtac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;

const projects = [
  {
    id: 1,
    title: "Modelado geométrico y acústico del auditorio Niccolo Paganini",
    description: "Este artículo presenta un análisis detallado del modelado geométrico y acústico del auditorio Niccolo Paganini en Parma, Italia, utilizando el software EASE. Se compararon los parámetros acústicos calculados con mediciones in situ, revelando diferencias notables en varios aspectos, como T20, T30 y STI.",
    imgUrl: projImg1,
    pdfUrl: projectPdf,
    iframeUrl: null, // No hay iframe en este proyecto
  },
  {
    id: 2,
    title: "Desarrollo de un software para procesamiento de RIR's",
    description: "Este artículo detalla el desarrollo de un programa informático en Python y Tkinter para calcular parámetros acústicos de salas, incluyendo respuestas al impulso monofónicas y estereofónicas.",
    imgUrl: projImg2,
    pdfUrl: projectPdf2,
    iframeUrl: null, // No hay iframe en este proyecto
  },
  {
    title: "Diseño de un Control Room",
    description: "Diseño de un control room de tipo ambechoic para un estudio de grabación, el cual cuenta con espacio para un total de 5 personas trabajando en su interior. En el recinto se instala un sistema de monitoreo multicanal 3D y un sistema binaural.",
    imgUrl: projImg3,
    pdfUrl: projectPdf3,
    iframeUrl: null, // Aquí se agrega el iframe
  },
  // Resto de los proyectos...
];

const secondProjects = [
  {
    id: 1,
    title: "Seminario de Infrasonido",
    description: "Completé con éxito el seminario Infrasonido dictado por el prof. Dr José Ruzzante, adquiriendo conocimiento sobre la propagación, detección, fuentes e inconvenientes asociados con los infrasonidos.",
    imgUrl: proj2Img1,
    pdfUrl: project2Pdf1,
    iframeUrl: null, // No hay iframe en este proyecto
  },
  {
    id: 2,
    title: "Clase de Dibujo Técnico",
    description: "Fragmento de una clase de dibujo técnico en la que fui ayudante de cátedra desde 2021 hasta 2023. Se explicó una aplicación práctica de temas discutidos hasta la fecha.",
    imgUrl: proj2Img2,
    pdfUrl: "",
    iframeUrl: iframeUrl, // No hay iframe en este proyecto
  },  
];

export { projects, secondProjects };
