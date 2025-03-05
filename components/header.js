// import Header from "./header";
// import Link from "next/link";
// import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/sidebar";
import { useState } from 'react';
import Navigationbar from './navigationbar';

import * as Iconsfa from "react-icons/fa6";


const MainHeader = (props) => {

  return (
    <header  className="header d-flex align-items-center position-relative">
        <div className="container container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
          <img src="sites_images/logo.png" alt="Elikya foods"/> 
          </a>
          <span className="navbar_def"> 
          <nav className="navmenu">
          <Navigationbar activity={props.activepage}/>
          </nav>
          </span>
          <span className="Mobiletogleenavbar"> 
          <Sidebar/>
          </span>
          <div className='contactAbslolution'>
            <span>
            <Iconsfa.FaSquarePhone className='my_iicone' style={{fontSize:"18px"}}/>  {props.phone}
            </span>
            <br/>
            <span>
            <Iconsfa.FaEnvelope className='my_iicone' style={{fontSize:"17px"}}/>   {props.email} 
            </span>
          </div>
        </div>
      </header>

  );
};
export default MainHeader;
