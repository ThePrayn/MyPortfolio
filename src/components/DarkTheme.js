import React, { useEffect, useState, useRef } from 'react'

export default function DarkTheme() {

    const bth = useRef(null)

    const [darkTheme, setDarkTheme] = useState(false)
    
    useEffect(() => {
        if(darkTheme === true){
        document.body.classList.add('dark')
        bth.current.classList.add('dark-mode-btn--active')}
        else{
            document.body.classList.remove('dark')
            bth.current.classList.remove('dark-mode-btn--active')
        }

    })
    
    
    
    const changeTheme = () =>{
        setDarkTheme(!darkTheme)
    
    }
  
  
    return (

    <div>
        <button ref={bth} onClick={changeTheme} className="dark-mode-btn">
            <img src="./img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
            <img src="./img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    </div>
  )
}
