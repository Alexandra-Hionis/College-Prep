import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "./styles.css";

function Nav() {
  return (
    <>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <ReactBootstrap.Navbar.Brand href="/services">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/images/C&C-Prep.png"}
            to="/services"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/services">
              Services
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={1} href="/about">
              About
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/contact">
              Contact
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default Nav;
