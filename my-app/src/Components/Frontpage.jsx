import React from "react";
import Hero from "./Hero";
// import UpcomingEvent from "./UpcomingEvent";
import Footer from "./Footer";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Header_ from "./Header_";
import OurTeam from "./OurTeam";
import "./OurTeam.css";
import UpcomingEvents from "./UpcomingEvents";
import Events from "./Events";

function Frontpage() {
  const styles = {
    background: "white",
  };
  return (
    <div style={styles}>
      <Navbar />
      <Hero />
      {/* <Events /> */}
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
