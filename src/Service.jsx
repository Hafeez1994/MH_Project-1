import React from "react";
import WebDev from './images/img3.jpg';
import MobDev from './images/img4.png';
import GameDev from './images/img5.jpg';


import './index.css'
const Service = () => {
    return(
      <>
        <div class="grid-container">
          <div class="grid-item">

            <img src = {WebDev} alt="web development" width = "480px" height = "300px"/>
            <h1>Web Development</h1>
            <p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services. </p>
          </div>
          <div class="grid-item">
          <img src = {MobDev} alt="Mobile development" width = "480px" height = "300px"/>
          <h1>Mobile Development</h1>
          <p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. Mobile development is doing any kind of development for any kind of mobile device. </p>
          </div>
          <div class="grid-item">
          <img src = {GameDev} alt="Game development" width = "480px" height = "300px"/>
          <h1>Game Development</h1>
          <p>Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release. While you create a game, it is important to think about the game mechanics, rewards, player engagement and level design.</p>

          </div>
        </div>
      </>
);
};
export default Service;