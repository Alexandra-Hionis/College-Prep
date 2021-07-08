import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function HomePageContainer() {
  // If you are a
  //                 student or graduate undecided about what to study, what career
  //                 fits you best, or have a major in mind but don’t know how to
  //                 link it to a career, you've come to the right place!
  return (
    <section id="home">
      <div>
        <Row className="no-gutters">
          <Col md={1} className="no-gutters"></Col>
          <Col md={5} className="no-gutters">
            <div className="hi">
              <p> My name is Sydney Peters</p>

              <h1 id="home-header">
                I specialize in college and career prep services.
              </h1>
              <h4 className="home-header-subfont">
                Trying to choose a college, a major, or a career? You've come to
                the right place!
              </h4>

              <div>
                <h4 className="home-header-subfont">Get started</h4>
                <div>
                  <Link to="/services">
                    <button
                      className="btn btn-primary custom-btn"
                      id="btn-space"
                    >
                      Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} className="no-gutters">
            <div id="client-img">
              <img
                alt="img of sydney peters"
                src={process.env.PUBLIC_URL + "/images/SP-img.png"}
                width="85%"
                height="auto"
              />
            </div>
          </Col>
          <Col md={1} className="no-gutters"></Col>
        </Row>
      </div>
    </section>
  );
}

export default HomePageContainer;
