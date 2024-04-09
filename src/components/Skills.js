import meter1 from "../assets/img/Matlab_Logo.png";
import meter2 from "../assets/img/aCad.png";
import meter3 from "../assets/img/sketchUp.png";
import meter4 from "../assets/img/smaart.png";
import meter5 from "../assets/img/ease.png";
import meter6 from "../assets/img/proTools.png";
import meter7 from "../assets/img/python.png";
import meter8 from "../assets/img/html.png";
import meter9 from "../assets/img/css.png";
import meter10 from "../assets/img/javaScript.png";
import meter11 from "../assets/img/react.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Tuve la oportunidad de trabajar con varias herramientas y softwares que me permitieron llevar a cabo diversas tareas y proyectos. Entre los softwares que manejo con destreza se incluyen:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>AutoCad</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>SketchUp</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Smaart</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Ease</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>ProTools</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MatLab</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Programación en Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>React</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
