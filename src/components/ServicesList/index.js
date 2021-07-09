import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

function ServicesList() {
  return (
    <Container>
      <div className="services-table shadow rounded login-wrap-div">
        {/* Top row */}
        <Row>
          <Col md={1} className="icon-border"></Col>

          {/* Service #1 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="resume icon"
                  src={process.env.PUBLIC_URL + "/images/resume.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Resume writing and development and personal brand statements
              </Col>
            </Row>
          </Col>
          {/* Service #2 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="pencil icon"
                  src={process.env.PUBLIC_URL + "/images/pencil.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Help with college essays. Including topic selection and
                revisions
              </Col>
            </Row>
          </Col>

          <Col md={1} className="description-border"></Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col md={1} className="icon-border"></Col>

          {/* Service #3 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="graduation cap icon"
                  src={process.env.PUBLIC_URL + "/images/grad-cap.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Assistance with college applications and guidance on the college
                application process as a whole{" "}
              </Col>
            </Row>
          </Col>
          {/* Service #4 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="dollar sign icon"
                  src={process.env.PUBLIC_URL + "/images/dollarsign.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Understainding basic financial aid options and FAFSA overview
              </Col>
            </Row>
          </Col>

          <Col md={1} className="description-border"></Col>
        </Row>

        {/* Third Row */}
        <Row>
          <Col md={1} className="icon-border"></Col>

          {/* Service #5 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="calender icon"
                  src={process.env.PUBLIC_URL + "/images/calender.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Scheduling college visits, what to expect and things to look out
                for
              </Col>
            </Row>
          </Col>
          {/* Service #6 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="checkmark icon"
                  src={process.env.PUBLIC_URL + "/images/check.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                Sending AP and Dual Enrollment scores to college options and
                transcript review
              </Col>
            </Row>
          </Col>

          <Col md={1} className="description-border"></Col>
        </Row>

        {/* Fourth Row */}
        <Row>
          <Col md={1} className="icon-border"></Col>

          {/* Service #7 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="LinkedIn icon"
                  src={process.env.PUBLIC_URL + "/images/linkedin.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                LinkedIn assistance. Including profesional devlopment skills on
                how to network and connect!
              </Col>
            </Row>
          </Col>
          {/* Service #8 */}
          <Col md={5} className="description-border">
            <Row>
              <Col md={4}>
                <img
                  alt="star icon"
                  src={process.env.PUBLIC_URL + "/images/start.png"}
                  width="80px"
                  height="80px"
                />
              </Col>
              <Col md={8}>
                We will tackle any other related issues or topics depending on
                the situation
              </Col>
            </Row>
          </Col>

          <Col md={1} className="description-border"></Col>
        </Row>
      </div>
    </Container>
  );
}

export default ServicesList;
