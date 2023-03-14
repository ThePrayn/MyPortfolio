import React from 'react'

export default function Main() {
  return (
    <div>
                <main className="section">
                <div className="container">
                <h1 className="title-1">Skills</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>ReactJS, JavaScript, HTML, CSS, NPM, BootStrap, Figma</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">QA</h2>
                        <p className='LastSkill'>Jira, Azure DevOps, Trello, Postman, SoapUI, Android Studio, Genymotion,
BrowserStack, XCode, iTools, Fiddler, Charles</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Management</h2>
                        <p className='LastSkill'>Agile, Scrum, Kanban, Team management </p>
                    </li>
                </ul>

        </div>
                
                
                
                <div className="container">
                
            <h2 className="title-1-5">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="https://github.com/ThePrayn/eShop">
                        <img src="./img/projects/01.jpg" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Online coffee shop </h3>
                    </a>
                </li>
                <li className="project">
                    <a href="https://github.com/ThePrayn/Battleship">
                        <img src="./img/projects/02.jpg" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Battleship Game</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="https://github.com/ThePrayn/CandyShop">
                        <img src="./img/projects/03.png" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Multi-page candy web shop (beta)</h3>
                    </a>
                </li>

                

            </ul>
        </div>

        <div className='container'>
        <h1 className="title-1-5 cont">Contacts</h1>
        <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p>+7-953-850-15-30</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">E-mail</h2>
                        <p>sergpolonikov@gmail.com</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p>@ThePrayn</p>
                    </li>
                    </ul>
        </div>
    </main>
    </div>
  )
}
