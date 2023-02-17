import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {MDBBtn } from 'mdb-react-ui-kit';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{marginBottom:"-70px",paddingLeft:"50px"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
      <h1 className="w-full text-3xl font-bold text-[#ee4714]">Incedo</h1>
    </div>
  );
};

export default Navbar;
