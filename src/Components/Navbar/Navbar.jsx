import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Hudson</div>
        <span>...</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Experiência</li>
            <li>Portfolio</li>
            <li>Feedback</li>
          </ul>
        </div>
        <button className='button n-button'>
          Contato
        </button>
      </div>
    </div>
  )
}

export default Navbar