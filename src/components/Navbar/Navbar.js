import React from 'react';
import styles from './Navbar.module.css';
import moonIcon from '../../assets/icons/moon-outline.svg'

const Navbar = () =>{

    return (
        <React.Fragment>
        <nav className={styles.navBar}>
            <ul>
              <li>
                    <a href="#home">
                        Where in the world?  
                    </a>  
              </li>
                  
              <li> 
                <a href="switch">
                    <img src={moonIcon} alt="moon icon to swithc between dark mode and light" />
                    Dark Mode
                </a>
                 
              </li>
          </ul>
        </nav>
          
    
        </React.Fragment>
        )
}


export default Navbar;