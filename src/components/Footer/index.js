import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./styles.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <div>
          <MDBRow>
            <MDBCol md="4">
              <div>
                <div>
                  <img
                    alt="graduation icon"
                    src={process.env.PUBLIC_URL + "/images/grad-cap.png"}
                    width="60px"
                    height="60px"
                    className="d-inline-block align-top"
                  />
                </div>

                <p>
                  I help highschool graduates, university graduates and adults
                  of all ages succeed.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div>
                <img
                  alt="resume icon"
                  src={process.env.PUBLIC_URL + "/images/resume.png"}
                  width="60px"
                  height="60px"
                  className="d-inline-block align-top"
                />

                <p>
                  I offer an array of college prep and career counseling
                  services.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div>
                <div>
                  <img
                    alt="rocketship icon"
                    src={process.env.PUBLIC_URL + "/images/rocketship.png"}
                    width="60px"
                    height="60px"
                    className="d-inline-block align-top"
                  />
                </div>

                <p>Help youself or your child succeed! </p>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
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
