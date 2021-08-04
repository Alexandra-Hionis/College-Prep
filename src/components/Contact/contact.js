import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import ContactHeader from "./contactTitle";

function Contact() {
  return (
    <Container>
      <ContactHeader />
      <Row>
        <Col lg={6} className="contact-info">
          <Row>
            <Col lg={3}></Col>
            <Col
              lg={2}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <img
                alt="email icon"
                src={process.env.PUBLIC_URL + "/images/email.png"}
                width="50px"
                height="50px"
                className="d-inline-block align-top icon"
              />
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <div className="contact-info">
                <a class="contact-link" href="mailto:SydneyVPeters@gmail.com">
                  sydneyvpeters@gmail.com
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}></Col>

            <Col
              lg={2}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <img
                alt="phone icon"
                src={process.env.PUBLIC_URL + "/images/phone.png"}
                width="50px"
                height="50px"
                className="d-inline-block align-top icon"
              />
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <div className="contact-info">
                <a
                  className="contact-link"
                  style={{ textDecoration: "none" }}
                  href="tel:4847649180"
                >
                  484-764-9180
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}></Col>

            <Col
              lg={2}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <img
                alt="linkedin icon"
                src={process.env.PUBLIC_URL + "/images/linkedin copy.png"}
                width="50px"
                height="50px"
                className="d-inline-block align-top icon"
              />
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <div className="contact-info">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/sydneypeters/"
                >
                  LinkedIn
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col
              lg={2}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <img
                alt="location icon"
                src={process.env.PUBLIC_URL + "/images/location.png"}
                width="50px"
                height="50px"
                className="icon"
              />
            </Col>
            <Col
              lg={7}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <div className="contact-info">
                <p>Greater Philadelphia Area</p>
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg={6} className="text-center">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="250px"
            height="250px"
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
