import React from 'react';
import "./Accueil.css";
import {Link} from 'react-router-dom'

class Accueil extends React.Component {

    

    render() {
    return (
        <div className="titlebar">

            <h1 className="title">  Highway To Hell </h1>

            <p className="introTitle"> The best selection of Creepy, bloody, scary movies for your Halloween night</p>

            <ul>
                <Link to="/movies" className="button-hover">Movies</Link>
                <Link to ="/monsters" className="button-hover">MonsterGame</Link>
            </ul>

        </div>
    );
}
}

export default Accueil