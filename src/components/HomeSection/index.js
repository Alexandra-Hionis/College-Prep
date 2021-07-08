import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Row, Col, Button } from "react-bootstrap";

function HomePageContainer() {
  // If you are a
  //                 student or graduate undecided about what to study, what career
  //                 fits you best, or have a major in mind but don’t know how to
  //                 link it to a career, you've come to the right place!
  return (
    <section id="home">
      <div>
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <div className="title">
              <p id="name"> My name is Sydney Peters</p>

              <h1 id="home-header">
                I specialize in college and career prep services.
              </h1>
              <h4 id="title-header" className="home-header-subfont">
                Trying to choose a college, a major, or a career? You've come to
                the right place!
              </h4>
            </div>
            <div>
              <div id="get-started">
                <h4 className="home-header-subfont">Get started</h4>
              </div>
              <div id="get-started-btn">
                <Link to="/services">
                  <Button variant="outline-dark">Services</Button>{" "}
                </Link>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div id="client-img">
              <img
                alt="img of sydney peters"
                src={process.env.PUBLIC_URL + "/images/SP-img.png"}
                width="100%"
                height="auto"
              />
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </section>
  );
}

export default HomePageContainer;
