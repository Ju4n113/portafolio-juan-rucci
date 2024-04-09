import projImg1 from "../assets/img/portadaNicolo.png";
import projImg2 from "../assets/img/portadaSoftware.png";
import projImg3 from "../assets/img/portadaControl.png";
import projectPdf from "../assets/pdfs/nicolo.pdf";
import projectPdf2 from "../assets/pdfs/software.pdf";
import projectPdf3 from "../assets/pdfs/control.pdf";


const projects = [
  {
    id: 1,
    title: "Modelado geométrico y acústico del auditorio Niccolo Paganini",
    description: "Este artículo presenta un análisis detallado del modelado geométrico y acústico del auditorio Niccolo Paganini en Parma, Italia, utilizando el software EASE. Se compararon los parámetros acústicos calculados con mediciones in situ, revelando diferencias notables en varios aspectos, como T20, T30 y STI.",
    imgUrl: projImg1,
    pdfUrl: projectPdf,
  },
  {
    id: 2,
    title: "Desarrollo de un software para procesamiento de RIR's",
    description: "Este artículo detalla el desarrollo de un programa informático en Python y Tkinter para calcular parámetros acústicos de salas, incluyendo respuestas al impulso monofónicas y estereofónicas.",
    imgUrl: projImg2,
    pdfUrl: projectPdf2,
  },
  {
    title: "Diseñ de un Control Room",
    description: "Diseño de un control room de tipo ambechoic para un estudio de grabación, el cual cuenta con espacio para un total de 5 personas trabajando en su interior. En el recinto se instala un sistema de monitoreo multicanal 3D y un sistema binaural.",
    imgUrl: projImg3,
    pdfUrl: projectPdf3,
  },
  // Resto de los proyectos...
];

export default projects;
