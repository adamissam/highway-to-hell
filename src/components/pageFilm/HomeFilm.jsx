import React from 'react'
import Carousel from './Carousel'
import SearchBar from './SearchBar'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './HomeFilm.css'


class HomeFilm extends React.Component {

    render(){
        return(
            <div className="homeFilmDiv">
                <Header />
                <Carousel />
                <SearchBar />
                <Footer />
            </div>
        )
    }
}
 export default HomeFilm
