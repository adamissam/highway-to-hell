import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Accueil from './accueil/Accueil'
import HomeFilm from './pageFilm/HomeFilm'
import HomeMonster from './pageMonster/HomeMonster'
import ShowMovie from './pageFilm/ShowMovie';


class Router extends Component {

    render() {
        return (
            
                <BrowserRouter>
                    <Route exact path="/" component={Accueil}/>
                    <Route path="/movies" component={HomeFilm}/>
                    <Route path="/monsters" component={HomeMonster}/>
                    <Route path ='/watch' component={ShowMovie} />
                </BrowserRouter>
            
        )
    }


}

export default Router