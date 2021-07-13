import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <p id="contact-info">
            SydneyvPeters@gmail.com 484-764-9180 greater philadelphia also
            virtual consultations available for those who are not in the greater
            philadelphia area
          </p>
        </Col>
        <Col sm={4}>
          <img
            alt="img of sydney peters"
            src={process.env.PUBLIC_URL + "/images/logoo.png"}
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
