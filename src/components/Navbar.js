import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <div>
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>My</strong> portfolio</a>

                <button className="dark-mode-btn">
                    <img src="./img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src="./img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><Link to='header__wrapper' smooth={true} offset={-140} className="nav-list__link">My CV</Link></li>
                    <li className="nav-list__item"><Link to='title-1' smooth={true} offset={-140} className="nav-list__link">Skills</Link></li>
                    <li className="nav-list__item"><Link to='projects' smooth={true} offset={-300} className="nav-list__link">Projects</Link></li>
                    <li className="nav-list__item"><Link to='cont' smooth={true} offset={-120} className="nav-list__link">Contacts</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
