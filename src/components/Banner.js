import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50); // Mantener la velocidad constante
  const toRotate = ["Estudiante avanzado en Ingeniería de Sonido"];
  const period = 100;
  const delayAfterWrite = 2000; // 2 segundos de retraso después de escribir

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]); // Agregar delta como dependencia para efecto de useEffect

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    if (!isDeleting && text === fullText) {
      setTimeout(() => {
        setIsDeleting(true);
        setDelta(period);
      }, delayAfterWrite);
    }

    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50); // Restaurar la velocidad constante
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Gracias por visitar mi portafolio!</span>
                <h1>{`Hola! Soy Juan Rucci`} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Estudiante avanzado en Ingeniería de Sonido"]'><span className="wrap">{text}</span></span></h1>
                  <p>Valoro la dedicación tanto en el estudio como en el trabajo, otorgándoles siempre la importancia y responsabilidad que merecen. En el ámbito laboral, destaco por mi creatividad y proactividad, considerándolos fundamentales para alcanzar el éxito en equipo.</p>
                  {/* <button onClick={() => console.log('connect')}>Contactemonos <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
