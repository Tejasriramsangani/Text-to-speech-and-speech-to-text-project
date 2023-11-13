

import React from "react";
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

function Navbar(){
  return(
    <>
    
    <div className="anu">
    <ul className="navbar">
     <div className="d-flex">
    <a href="/"><img className="image" src="./images/logoimg(1).jpg"/> </a>
     
      </div> 
      <li className="hide" ><NavLink to="/"><HomeIcon/>Home</NavLink></li>
      
      <li className="hide1"><NavLink to="/About"><InfoIcon/>AboutUs</NavLink></li>
      
      <li className="hide1"><NavLink to="/Contact">< ContactPageIcon/>ContactUs</NavLink></li>

      <li className="hide1"><NavLink to="/Ourteam"><Diversity3Icon/>Ourteam</NavLink></li>
      
      <li className="log"><NavLink to="/LoginPage">< PersonOutlineIcon/>Login</NavLink></li>
      

      <div class="dropdown">
      <button class="dropbtn"><MenuIcon/></button>
      <div class="dropdown-content">
      
      <Link className='drpli' to="/About">About</Link>
      <Link className='drpli' to="/Tts">Tts</Link>
      <Link className='drpli' to="/Stt">Stt</Link>
      <Link className='drpli' to="/Ourtram">Ourteam</Link>

      <Link className='drpli' to="/ContactUs">Contactus</Link>
      
  </div>
  </div>


    </ul>
    
    </div>
    </>
  );
}

export default Navbar;