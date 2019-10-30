import React from 'react';
import "./Accueil.css";

const Accueil = () => {
    return (
        <div className="titlebar">
            <h1 className="title">  HighWay To Hell </h1>

            <p className="introTitle"> The best selection of Creepy, bloody, scary movies for your Halloween night</p>

            <ul>
                <li><a href="#Movies" class="button-hover"> Movies</a></li>
                <li><a href="#MonsterGame" class="button-hover"> MonsterGame</a></li>
            </ul>

        </div>
    );
}

export default Accueil;