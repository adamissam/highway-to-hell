import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () =>{
    return(
        <div className="header">
            <ul>
                <Link to="/movies" className="button-hover">Movies</Link>
                <Link to ="/monsters" className="button-hover">Monsters</Link>
            </ul>
        </div>
    )
}

export default Header
