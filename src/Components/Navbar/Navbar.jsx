import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Hudson</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>

            <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'>
             <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to='Services'>
            <li>Serviços</li>
            </Link>
            <Link spy={true} smooth={true} to='Experience'>
            <li>Experiência</li>
            </Link>
            <Link spy={true} smooth={true} to='Portfolio'>
            <li>Portfolio</li>
            </Link>
           
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