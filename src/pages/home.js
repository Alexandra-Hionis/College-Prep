import React from "react";
import Footer from "../components/Footer";
import IconsDiv from "../components/IconsDiv";
import ServicesHeader from "../components/ServicesHeader";
import ServicesList from "../components/ServicesList";
import AboutHeader from "../components/AboutHeader";
import About from "../components/About";
import Carousel from "../components/Carousel";
import ContactHeader from "../components/ContactHeader";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div>
      <Carousel />
      <IconsDiv></IconsDiv>

      <ServicesHeader></ServicesHeader>
      <ServicesList></ServicesList>
      <AboutHeader></AboutHeader>
      <About></About>
      <ContactHeader></ContactHeader>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
export default Home;
