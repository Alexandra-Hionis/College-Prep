import React from "react";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function ServicesGrid() {
  return (
    <Container>
      {/* <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row> */}
      <div>
        <h1 class="display-2">Full Stack Conf</h1>
        <p class="lead">A One-day Conference About All Things JavaScript!</p>
      </div>
    </Container>
  );
}

export default ServicesGrid;
