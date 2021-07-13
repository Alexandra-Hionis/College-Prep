import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";

function AboutHeader() {
  return (
    <Container id="about">
      <div>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h1 id="about-header">About</h1>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
}
export default AboutHeader;
