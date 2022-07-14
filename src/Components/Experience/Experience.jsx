import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+1</div>
        <span style={{color: darkMode?'var(--orange)':''}}>ano de</span>
        <span>experiência</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+10</div>
        <span style={{color: darkMode?'var(--orange)':''}}>projetos</span>
        <span>concluídos</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>+5</div>
        <span style={{color: darkMode?'var(--orange)':''}}>empresas</span>
        <span>parceiras</span>
      </div>
      
    </div>
  )
}

export default Experience