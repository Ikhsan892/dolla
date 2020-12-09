import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
