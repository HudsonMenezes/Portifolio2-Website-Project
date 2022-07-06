import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

function Services() {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>Meus incríveis</span>
        <span>Serviços</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Eum minus alias quod dolore ipsam eligendi fugiat sunt quas.
        </span>
        <button className='button s-button'>
          Baixar Currículo
        </button>
        <div className='blur s-blur1' 
        style={{background: '#abf1ff94'}}></div>
      </div>

      {/* Right Side */}
      <div className="cards">I am the Right side</div>
    </div>
  )
}

export default Services