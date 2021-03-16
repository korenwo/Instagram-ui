import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faCompass, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Menu.scss';


function Menu () {

    
    
        return (
                    <ul className="icons">
                        <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                        </li>
                <li>
                    <Link to="/post/create">
                        <FontAwesomeIcon icon={ faPlusSquare } />
                    </Link>
                    
                </li>
                <li>
                    <FontAwesomeIcon icon={ faCompass } />
                </li>
                <li>
                <FontAwesomeIcon icon={ faHeart } />
                </li>
                <li>
                    <Link to="/Search">
                <FontAwesomeIcon icon= { faSearch } />
                    </Link>
                    
                </li>
            
            </ul>
           
           
         
    );
}   
export default Menu;
