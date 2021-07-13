import React from "react";
// import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import IconsDiv from "../components/IconsDiv";
import ServicesHeader from "../components/ServicesHeader";
import ServicesList from "../components/ServicesList";
import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      {/* <HomeSection /> */}
      <Carousel />
      <IconsDiv></IconsDiv>

      <ServicesHeader></ServicesHeader>
      <ServicesList></ServicesList>
      <AboutHeader></AboutHeader>
      <About></About>

      <Footer></Footer>
    </div>
  );
};
export default Home;
