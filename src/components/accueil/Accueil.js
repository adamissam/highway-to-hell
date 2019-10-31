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
                <Link to="/movies"><li><a href="#Movies" class="button-hover">Movies</a></li></Link>
                <Link to ="/monsters"><li><a href="#MonsterGame" class="button-hover">MonsterGame</a></li></Link>
            </ul>

        </div>
    );
}
}

export default Accueil