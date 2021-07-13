import React from "react";
// import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import IconsDiv from "../components/IconsDiv";
import ServicesHeader from "../components/ServicesHeader";
import ServicesList from "../components/ServicesList";
import AboutHeader from "../components/AboutHeader";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <IconsDiv></IconsDiv>

      <ServicesHeader></ServicesHeader>
      <ServicesList></ServicesList>
      <AboutHeader></AboutHeader>

      <Footer></Footer>
    </div>
  );
};
export default Home;
