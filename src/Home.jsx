import React from "react";
import Web from './images/img1.png';
import './index.css'
const Home = () => {
    return(
      <>
      <div className = "container-fluid">
      <img src ={Web}  alt ="home img" width = "1550px" height="700px"/>
      <div className = "c1">
      <h1>Plug2Tech</h1>
      </div>
      </div>
      
      </>
    );
  };
  
  export default Home;