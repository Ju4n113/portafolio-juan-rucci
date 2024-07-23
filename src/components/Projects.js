import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import timeLineData from './timeLineData.js';
import '../App.css'; // Asegúrate de importar tu archivo CSS

export const Projects = () => {
  // Filtra los proyectos del timeline
  const projects = timeLineData.filter(item => item.type === 'project');
  const secondProjects = timeLineData.filter(item => item.type === 'secondProject');
  const thirdProjects = timeLineData.filter(item => item.type === 'thirdProject');

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>
                    Explora una selección de proyectos en los que participé,
                    algunos durante mi carrera universitaria, y otros
                    personales. Estas iniciativas abarcan diversos campos en la
                    Ingeniería de Sonido. Si alguna de estas descripciones te
                    interesa, no dudes en hacer clic en las tarjetas para
                    acceder al contenido.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                      <Nav.Link eventKey="first">Experiencia Laboral</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Ingeniería de Sonido</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Educación</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div className="project-grid">
                          {secondProjects.map((project, index) => (
                            <div key={index} className="project-grid-item">
                              <ProjectCard {...project} />
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-grid">
                          {projects.map((project, index) => (
                            <div key={index} className="project-grid-item">
                              <ProjectCard {...project} />
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="project-grid">
                          {thirdProjects.map((project, index) => (
                            <div key={index} className="project-grid-item">
                              <ProjectCard {...project} />
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
