import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Row, Col, Button } from "react-bootstrap";

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
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <h1 id="home-page-header">College Prep and Career Counseling</h1>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePageContainer;
