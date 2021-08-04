import React from "react";
import "./styles.css";
import { Row, Col, Container } from "react-bootstrap";
import AboutHeader from "./aboutTitle";

function About() {
  return (
    <Container>
      <AboutHeader />
      <Row>
        <Col sm={5}>
          <img
            id="client-photo"
            alt="img of sydney peters"
            src={process.env.PUBLIC_URL + "/images/SP.JPG"}
            width="100%"
            className="d-inline-block align-top"
          />
        </Col>
        <Col sm={7}>
          <p>
            My name is Sydney and I live in the greater Philadelphia area. I
            have worked in education for years, specifically with college
            students. I have experience in academic and career coaching,
            financial aid, academic advising, diversity and inclusion
            programming, and new student programming. I have a passion for
            higher education and working with college students. I’ve worked with
            an extremely diverse student body including (but not limited to)
            homeless youth populations, first generation college students,
            low-income students, athletes, veterans, students with disabilities,
            LGBTQIA+ populations, students suffering from mental health issues,
            international students, and more.{" "}
          </p>
          <p>
            I was also a first generation college student. I completed my
            masters degree in Higher Education Policy and Student Affairs at
            West Chester University, graduating top of my class with a 4.0. I
            have extensive experience in research and scholarly writing. My goal
            is to use my combined experiences working with college students and
            working in the higher education industry to help as many young
            adults as possible with their transition to college. This is a safe
            space for students of all backgrounds. My pronouns are she/her/hers.
            I look forward to working together. If you have any questions,
            please do not hesitate to reach out.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
