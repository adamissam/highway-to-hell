import React from 'react';
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <div>
            <ul>
                <Link to="/movies" className="button-hover">Movies</Link>
                <Link to ="/monsters" className="button-hover">Monsters</Link>
            </ul>
        </div>
    )
}

export default Header
