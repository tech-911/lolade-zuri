import React from "react";
import slackImg from '../assets/images/slack.png';
import Img2 from '../assets/images/Icon (1).png';
import Img from '../assets/images/I4G.png';
import Img1 from '../assets/images/Zuri.Internship_Logo.png'
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">

            <div className="row">
               <img src={slackImg} className="r1" id="slack" />
               <img src={Img2} className="r2" />
              </div>  
            
            <hr />
          
               <div className="col">
                  <img src={Img1} className="col1" />

                  <p className="para">HNG Internship 9 Frontend Task</p>

                  <img src={Img} className="col2" />
                </div>
          </div>
        
    )
}

export default Footer;