import React from "react";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function ServicesHeader() {
  return (
    <div>
      <Row>
        <Col md={12}>
          <h1 id="services">Services</h1>
        </Col>
      </Row>
    </div>
  );
}
export default ServicesHeader;
