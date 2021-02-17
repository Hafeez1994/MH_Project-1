import React from "react";
import WebAbout from './images/img2.jpg'

const About = () => {
    return(
    <>
       <div className = "container-fluid">
      <img src ={WebAbout}  alt ="about img" width = "1550px" height="700px"/>
      </div>


      <div className="c2">
        <p className ="c3">We are strong and capable technology geeks, creative designers, UX experts, Innovators and bound by user first strategy. We have strong expertise of approaches, tools & techniques for adapting and applying creative thoughts into required technology solutions.</p>
        
         <h1> We are a team of talented developers creating websites.</h1>
        
      </div>
    </>
    
    );
}
    export default About;