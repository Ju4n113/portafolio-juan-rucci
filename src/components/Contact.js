import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/speakerContact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    setErrors({
      ...errors,
      [category]: !value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    const newErrors = {};
    Object.keys(formDetails).forEach((key) => {
      if (!formDetails[key]) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({ success: false, message: 'Por favor, completa todos los campos antes de enviar.' });
      return;
    }

    setButtonText("Enviando...");
    let formData = new FormData();
    Object.entries(formDetails).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      let response = await fetch("https://formsubmit.co/ajax/juanmrucci@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      setButtonText("Enviar");
      let result = await response.json();

      if (result.success) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Mensaje enviado exitosamente.' });
      } else {
        setStatus({ success: false, message: 'Algo salió mal, por favor intenta de nuevo más tarde.' });
      }
    } catch (error) {
      setButtonText("Enviar");
      setStatus({ success: false, message: 'Algo salió mal, por favor intenta de nuevo más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contacto</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Nombre"
                          className={errors.firstName ? 'error' : ''}
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Apellido"
                          className={errors.lastName ? 'error' : ''}
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          className={errors.email ? 'error' : ''}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="No. de Teléfono"
                          className={errors.phone ? 'error' : ''}
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Mensaje"
                          className={errors.message ? 'error' : ''}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
