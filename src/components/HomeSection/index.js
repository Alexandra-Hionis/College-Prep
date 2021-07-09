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
                <p id="name">
                  {" "}
                  My name is <span id="name-span">Sydney Peters</span>
                </p>

                <h1 id="home-header">
                  I specialize in{" "}
                  <span className="title-span">college prep </span> and{" "}
                  <span className="title-span">career counselling</span>{" "}
                  services.
                </h1>
                <h4 id="title-header" className="home-header-subfont">
                  Trying to choose a college, a major, or a career? You've come
                  to the right place!
                </h4>
              </div>
              <div>
                <div id="get-started">
                  <h4
                    className="home-header-subfont"
                    style={{ fontWeight: "bold" }}
                  >
                    Get started
                  </h4>
                </div>
                <div id="get-started-btn">
                  <Link to="/services">
                    <Button className="custom-btn" variant="outline-dark">
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
                src={process.env.PUBLIC_URL + "/images/SP-img.png"}
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
