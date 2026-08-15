import React from "react";
import Navbar from "../Components/Navbar";
import LandingPage from "../Components/LandingPage";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { Element } from "react-scroll";
const HomePage = () => {
  return (
    <>
      {/* background */}
      <div className="relative min-h-screen bg-linear-to-b from-[#0A0A0A] to-[#2C1810] overflow-hidden">
        <div className="absolute -top-25 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
        {/*Navbar*/}
        <div>
          <Navbar />
        </div>
        <Element name="Home">
          <div>
            <LandingPage />
          </div>
        </Element>
        <div className="w-full h-4 bg-amber-600/70"></div>
        <Element name="Menu">
          <div className="mb-10 pb-5 bg-white">
            <Menu />
          </div>
        </Element>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
