import React from 'react'
import { Link } from 'react-scroll'
import DarkTheme from './DarkTheme'

export default function Navbar() {
  return (
    <div>
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>My</strong> portfolio</a>

                <ul className="nav-list">
                    <li className="nav-list__item"><Link to='header__wrapper' smooth={true} offset={-140} className="nav-list__link">My CV</Link></li>
                    <li className="nav-list__item"><Link to='title-1' smooth={true} offset={-140} className="nav-list__link">Skills</Link></li>
                    <li className="nav-list__item"><Link to='projects' smooth={true} offset={-300} className="nav-list__link">Projects</Link></li>
                    <li className="nav-list__item"><Link to='cont' smooth={true} offset={-120} className="nav-list__link">Contacts</Link></li>
                </ul>
                <DarkTheme/>
            </div>
        </div>
    </nav>
    </div>
  )
}
