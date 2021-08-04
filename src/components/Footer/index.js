import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";

const FooterPage = () => {
  return (
    <footer className="font-small pt-4 mt-4 footer">
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href=""> AH Websites </a>
        </Container>
      </div>
    </footer>
  );
};

export default FooterPage;
