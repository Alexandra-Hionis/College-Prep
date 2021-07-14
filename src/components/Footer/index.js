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
          {/* <img
            href="https://alexandra-hionis.github.io/"
            src={process.env.PUBLIC_URL + "/images/ah-logo.png"}
            alt="Alexandra Hionis Developments Logo"
            style={{ width: "50px", height: "50px" }}
          /> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
