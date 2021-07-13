import React from "react";
import "./styles.css";
import { Row, Col, Button, Container } from "react-bootstrap";

function HomePageContainer() {
  return (
    <div
      style={{
        backgroundImage: "url(images/background1.png)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div>
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <div style={{ verticalAlign: "middle" }}>
                <h1 id="home-page-header">
                  College Prep and Career Counseling
                </h1>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePageContainer;
