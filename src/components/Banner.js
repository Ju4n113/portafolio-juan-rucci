import { useState, useEffect } from "react";
import '../App.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const toRotate = ["Estudiante avanzado en Ingeniería de Sonido"];
  const period = 100;
  const delayAfterWrite = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

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
      setDelta(50);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="banner-container">
        <div className="banner-row">
          <div className="banner-col">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__fadeIn" : ""}>
                  <div className="bannerPack">
                    <div className="bannerTitulo">
                      <span className="tagline">Gracias por visitar mi portafolio!</span>
                    </div>
                    <div className="bannerH1">
                      <h1>
                      <div className="bannerJMR">
                      Hola! Soy Juan Rucci 
                      </div>
                      <span className="txt-rotate" dataPeriod="1000" data-rotate='["Estudiante avanzado en Ingeniería de Sonido"]'><span className="wrap">{text}</span></span></h1>
                    </div>
                    {/* <div className="bannerParrafo">
                      <p>Valoro la dedicación tanto en el estudio como en el trabajo, otorgándoles siempre la importancia y responsabilidad que merecen. En el ámbito laboral, destaco por mi creatividad y proactividad, considerándolos fundamentales para alcanzar el éxito en equipo.</p>
                    </div> */}
                  </div>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
