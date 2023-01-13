import React from 'react'


class Header extends React.Component{
    
    render() {
        return (
          <header className='header'>
            <nav>
              <ul>
                <li>THE PRAYN</li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Galery</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </nav>
            
          </header>
        );
      }
    }

export default Header