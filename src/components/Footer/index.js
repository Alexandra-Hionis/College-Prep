import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./styles.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://alexandra-hionis.github.io/"> AH Developments </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
