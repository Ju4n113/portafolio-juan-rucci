import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import cv from '../assets/pdfs/CV-RUCCI_JUAN_MARTIN.pdf';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Cerrar el menú si está abierto y el usuario hace scroll
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]); // Dependencia añadida para el estado del menú

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/timeline') {
      setActiveLink('timeline');
    }
  }, [location]);

  const handleNavClick = (value, hash) => {
    setActiveLink(value);
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      else {
        // Desplazarse a la parte superior si ya estás en la página de timeline
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };


  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => handleNavClick('home', '#home')}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setMenuOpen(!menuOpen)} // Toggle el estado del menú
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('home', '#home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('skills', '#skills')}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('projects', '#projects')}
            >
              Proyectos
            </Nav.Link>
            <Nav.Link 
              className={activeLink === 'presentation' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('presentation', '#presentation')}
            >
              Presentación
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/timeline" 
              className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => handleNavClick('timeline', '#timeline')}
            >
              Time Line
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/juanrucci" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Icon" />
              </a>
              <button className="cv-button" onClick={() => window.open(cv, "_blank")}>
                CV
              </button>
            </div>
            <button className="vvd" onClick={() => handleNavClick('contact', '#connect')}><span>Contacto</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
