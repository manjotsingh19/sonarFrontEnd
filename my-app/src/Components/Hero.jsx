import React from "react";
import { Link } from "react-router-dom";
import bgFront from './images/bgFront.jpeg';
import frontBg from './images/gif04.gif';
import backImage from '././images/pexels-eberhard-grossgasteiger-2310713.jpg';
import { Parallax } from "react-parallax";

const Hero = () => {
  return (

    // <Parallax strength={-600} bgImage={backImage}>
    // {/* <div className="text-black" style={{
    //   // backgroundImage: `url(${frontBg})`,
    //   backgroundImage: `url(${bgFront})`,
    //   backgroundSize: "cover",
    // }}> */}
    <>
      <div style={{ margin: '-105px 0px 20px' }} className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" style={{ margin: '150px 0 0 0' }}>Hackcedo
          <div className='text-[#ee4714] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>2023</div>
        </h1>

        <p className="md:text-l text-justified text-white-500">
          Hackathons which help you put your coding skills to work.
          Hackcedo is essentially online tool that help people manage their projects within a set timeframe. Project creation, progress tracking, deadlines, prize organization - this platform has it all.
        </p>

        <Link to="/registrationForm">
          <button className="bg-[#3b71ca] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
            Register
          </button>
        </Link>
        {/* <Link to="/logIn" style={{ color: "white" }}><MDBBtn  >LogIn</MDBBtn></Link> */}
      </div>
    {/* </div > */}
    {/* // </Parallax> */}
    </>
  );
};

export default Hero;
