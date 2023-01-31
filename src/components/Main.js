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
                        <p>JavaScript, ReactJS, HTML, CSS, NPM, BootStrap, Figma</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">QA</h2>
                        <p className='LastSkill'>Jira, Azure DevOps, Trello,Postman, SoapUI. Android Studio, Genymotion,
BrowserStack, XCode, iTools. Fiddler, Charles</p>
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
                    <a href="./project-page.html">
                        <img src="./img/projects/02.jpg" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Video service</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./img/projects/03.jpg" alt="Project img" className="project__img"/>
                        <h3 className="project__title">Video portal</h3>
                    </a>
                </li>

                

            </ul>
        </div>
    </main>
    </div>
  )
}
