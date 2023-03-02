import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {MDBBtn } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

   const handleclick = (e) => {
    e.preventDefault();
    window.login = false;
    window.status = 'Login';
    navigate("/logIn");
   }

  return (
    <div style={{marginBottom:"5px",paddingLeft:"50px", backgroundColor:"#d4e4ff"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
      <div><Link to="/">
          <img src="https://www.incedoinc.com/wp-content/uploads/incedo-logo.png" width="101px"/>
              {/* </h1> */}
              </Link></div>
      <div><Link to="/ChangePassword"><Button variant="outlined" color='error'>Update Password</Button></Link>
      &nbsp;&nbsp;&nbsp;
      <Button onClick={handleclick} variant="contained" color='error'>{window.status}</Button>
      </div>
    </div>
  );
};

export default Navbar;
