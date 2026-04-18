import React from "react";
import Hero from "../components/Home/Hero";
import MainService from "../components/Home/MainServices";
import WhyChooseUs from "../components/Home/ChooseUs";
import CountFeature from "../components/Home/CountFeature";
import Testimonials from "../components/Home/Testimonial";
import AboutSection from "../components/Home/AboutSection";
import TopProjects from "../components/Home/TopProjects";
import About from "../components/Home/About";
import Mission from "../components/Home/ourMission";
import ProjectDelivery from "../components/Home/ProjectDelivery";

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <AboutSection/>
      <Mission/>
      <MainService />
      <WhyChooseUs />
      <ProjectDelivery/>
      <TopProjects/>
      {/* <CountFeature /> */}
      <Testimonials />
    </>
  );
};

export default Home;
