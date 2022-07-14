import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './HudsonMenezes-CV.pdf'


function Services() {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Meus incríveis</span>
        <span>Serviços</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Eum minus alias quod dolore ipsam eligendi fugiat sunt quas.
        </span>
        <a href={Resume} download>

        <button className='button s-button'>
          Baixar Currículo
        </button>
          
        </a>
        <div className='blur s-blur1' 
        style={{background: '#abf1ff94'}}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <div style={{left: '14rem'}}>
          <Card 
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail ={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        {/* Second Card */}
        <div style={{top: '12rem', left: '-4rem'}}>
          <Card 
            emoji = {Glasses}
            heading = {'Desenvolvimento'}
            detail ={"Html, Css, JavaScript, React"}
          />
        </div>
        {/* Third Card */}
        <div style={{top: '19rem', left: '12rem'}}>
          <Card 
            emoji = {Humble}
            heading = {'UI/UX'}
            detail ={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, magnam!'}
          /> 
        </div>
        <div className='blur s-blur2'
         ></div>
      </div>
    </div>
  )
}

export default Services