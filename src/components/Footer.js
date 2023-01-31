import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://t.me/ThePrayn"><img src="./img/icons/tg.svg" alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/ThePrayn"><img src="./img/icons/gitHub.svg" alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/serg-polonikov/"><img src="./img/icons/linkedIn.svg" alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Power by ThePrayn</p>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'><p className='you'>Additional information for HR</p></a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
