import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="works">

      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Trabalhos e Projetos</span>
        <span>Concluídos</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
          Eum minus alias quod dolore ipsam eligendi fugiat sunt quas. <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, in.<br />
          Lorem ipsum dolor sit amet.
        </span>
       

        <button className='button s-button'>
          Baixar Currículo
        </button>
          
        
        <div className='blur s-blur1' 
        style={{background: '#abf1ff94'}}></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background Circles */}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>

    </div>
  )
}

export default Works