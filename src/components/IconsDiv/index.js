import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const IconsDiv = () => {
  return (
    <Container fluid className="text-center text-md-left icons-div">
      <div>
        <Row>
          <Col md="4">
            <div>
              <div>
                <img
                  alt="graduation icon"
                  src={process.env.PUBLIC_URL + "/images/cap-white.png"}
                  width="60px"
                  height="60px"
                  className="d-inline-block align-top"
                />
              </div>

              <p>
                I help highschool graduates, university graduates and adults of
                all ages succeed.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div>
              <img
                alt="resume icon"
                src={process.env.PUBLIC_URL + "/images/resume-white.png"}
                width="60px"
                height="60px"
                className="d-inline-block align-top"
              />

              <p>
                I offer an array of college prep and career counseling services.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div>
              <div>
                <img
                  alt="rocketship icon"
                  src={process.env.PUBLIC_URL + "/images/rocket-white.png"}
                  width="60px"
                  height="60px"
                  className="d-inline-block align-top"
                />
              </div>

              <p>Help youself or your child succeed! </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default IconsDiv;
