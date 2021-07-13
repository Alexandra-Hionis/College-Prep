import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";

function ServicesHeader() {
  return (
    <Container>
      <div>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h1 id="services">Services</h1>
            <p id="services-p">
              Whether you are a high school student, college graduate or a
              hardworking adult who is undecided about your future, what to
              study or what career path to take, I can help you take the next
              steps.
            </p>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
}
export default ServicesHeader;
