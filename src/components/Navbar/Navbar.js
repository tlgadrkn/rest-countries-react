import React from 'react';
import styles from './Navbar.module.css';
import moonIcon from '../../assets/icons/moon-outline.svg'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
const Navbar = () =>{
  const history = useHistory();

    return (
        <React.Fragment>
        <nav className={styles.navBar}>
            <ul>
              <li>
                    <Link onClick={() => history.push('/')}>
                        Where in the world?  
                    </Link>  
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