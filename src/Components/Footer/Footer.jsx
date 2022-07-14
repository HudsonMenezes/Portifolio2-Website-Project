import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="f-content">
        <span>Hudson Menezes - hudson.bm23@gmail.com</span>
        <div className="f-icons">
          <a href='https://www.instagram.com/hudson.ads/' target='_blank'>
          <Insta color='white' size='3rem'/>
          </a>
          <a href='https://www.linkedin.com/in/hudson-menezes/' target='_blank'>
          <Linkedin color='white' size='3rem'/>
          </a>
          <a href='https://github.com/HudsonMenezes' target='_blank'>
          <Github color='white' size='3rem'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer