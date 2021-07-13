import React from "react";
// import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import IconsDiv from "../components/IconsDiv";
import ServicesHeader from "../components/ServicesHeader";
import ServicesList from "../components/ServicesList";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <IconsDiv></IconsDiv>

      <ServicesHeader></ServicesHeader>
      <ServicesList></ServicesList>

      <Footer></Footer>
    </div>
  );
};
export default Home;
