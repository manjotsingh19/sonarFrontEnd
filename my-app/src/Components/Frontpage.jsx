import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Cards from "./Cards";
import Navbar from "./Navbar";
import OurTeam from "./OurTeam";
import "./OurTeam.css";
import UpcomingEvents from "./UpcomingEvents";


function Frontpage() {
  const styles = {
    background: "white",
  };
  return (
    <div style={styles}>
      <Navbar />

      <Hero />

      <UpcomingEvents />
      {/* ///////////   winners   ////////////// */}
      <Cards />
      {/* ////////////////////////////////////// */}
      <OurTeam />
      <Footer />
    </div>
    
  );
}

export default Frontpage;
