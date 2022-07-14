import React,  { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'


function Intro() {
   // Transition
   const transition = { duration: 2, type: "spring" };

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Olá! Me chamo</span>
          <span>Hudson Menezes</span>
          <span>Desenvolvedor Web Front end Jr. com vasta experiência em Web Design e Desenvolvimento!</span>
        </div>

        <button className="button i-button">Entre em Contato
        </button>
        <div className='i-icons'>
          <a href='https://github.com/HudsonMenezes' target='_blank'><img src={Github} alt="Github Link" /></a>
          <a href='https://www.linkedin.com/in/hudson-menezes/'  target='_blank'><img src={Linkedin} alt="Linkedin Link" /></a>
          <a href='https://www.instagram.com/hudson.ads/' target='_blank'><img src={Instagram} alt="Instagram Link" /></a>
        </div>


      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img 
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        src={glassesimoji} alt="" />

        <motion.div 
        initial={{ top: "-4%", left: "74%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        style={{top: '-4%', left: '68%'}}>

          <FloatingDiv 
          image={crown} 
          txt1='Web'
          txt2='Developer'/>
        </motion.div>
        <motion.div
        initial={{ left: "8rem", top: "18rem" }}
        whileInView={{ left: "1.75rem" }}
        transition={transition}
        style={{top: '18rem', left: '1.75rem'}}>

          <FloatingDiv 
          image={thumbup} 
          txt1='Best Design' 
          txt2='Award'/>

        </motion.div>
        {/* Blur Divs */}
        <div className='blur' 
        style={{background: "rgb(238 210 255"}}></div>
        <div className='blur' 
        style={{background: '#c1f5ff',
        top: '17rem',
        width: '21rem',
        height: '11rem',
        left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro