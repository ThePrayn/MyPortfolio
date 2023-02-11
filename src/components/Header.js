import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Sergey</em></strong><br/>
                I'm a junior frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="https://drive.google.com/file/d/1VTlIfEB6bPsVE49ya1FaZFAp3wxnw9SA/view?usp=sharing" className="btn">Download CV</a>
        
        
        </div>
    </header>
    </div>
  )
}
