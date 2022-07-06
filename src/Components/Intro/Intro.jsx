import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

function Intro() {
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Olá! Me chamo</span>
          <span>Hudson Menezes</span>
          <span>Desenvolvedor Web Front end Jr. com vasta experiência em Web Design e Desenvolvimento!</span>
        </div>

        <button className="button i-button">Entre em Contato
        </button>
        <div className='i-icons'>
          <a href='#'><img src={Github} alt="Github Link" /></a>
          <a href='#'><img src={Linkedin} alt="Linkedin Link" /></a>
          <a href='#'><img src={Instagram} alt="Instagram Link" /></a>
        </div>


      </div>
      <div className="i-right">
        I'm right side
      </div>
    </div>
  )
}

export default Intro