import React from "react";
// import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import IconsDiv from "../components/IconsDiv";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./C&C-Prep.png";

// import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <IconsDiv></IconsDiv>
      <Footer></Footer>
    </div>
  );
};
export default Home;
