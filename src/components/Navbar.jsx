import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>


        <nav>
            <ul className='contenedorNavbar'>
                    <li><Link className='menu-link' to="/">Home</Link></li>
                    <li><Link className='menu-link' to="/about">About</Link></li>
                    <li><Link className='menu-link' to="/education">Education</Link></li>
                    <li><Link className="menu-link" to="/portfolio">Portfolio</Link></li>
                    <li><Link className='menu-link' to="/contact">Contact</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar