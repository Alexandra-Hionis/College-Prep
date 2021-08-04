import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";

function ContactHeader() {
  return (
    <Container id="contact">
      <div>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h1 id="contact-title">Contact</h1>
            <p id="contact-p">Get in touch</p>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
}
export default ContactHeader;
