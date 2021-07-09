import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Row, Col, Button } from "react-bootstrap";

function HomePageContainer() {
  return (
    <section id="home">
      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={5}>
            <div class="text-container">
              <div className="title">
                <p id="name"> Hi, I'm Sydney!</p>

                <h1 id="home-header">
                  I specialize in{" "}
                  <span className="title-span">college prep </span> and{" "}
                  <span className="title-span">career counseling</span>{" "}
                  services.
                </h1>
                <h4 id="title-header" className="home-header-subfont">
                  Trying to choose a college, a major, or a career?
                </h4>
              </div>
              <div>
                <div id="get-started"></div>
                <div id="get-started-btn">
                  <Link to="/services">
                    <Button
                      className="custom-btn btn-sm"
                      variant="outline-dark"
                    >
                      Services
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div id="client-img">
              <img
                alt="img of sydney peters"
                src={process.env.PUBLIC_URL + "/images/SVP.png"}
                width="100%"
                height="auto"
              />
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </div>
    </section>
  );
}

export default HomePageContainer;
