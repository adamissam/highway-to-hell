import React, {useState} from 'react'
import FilmCard from './FilmCard'
import axios from 'axios'
import './FilmList.css'

const FilmList = () => {

    const [film, setFilm] = useState([])


    const getFilm = () => {
            axios.get(`https://hackathon-wild-hackoween.herokuapp.com/movies`)
                .then(response => setFilm(response.data.movies))
    }

    getFilm();
    
        return ( 
            <div className="filmList">
                {film.map(x =>(
                    <FilmCard title={(x.title.replace(/_/g, " ")) } year={x.year} src={x.posterUrl} country={x.country.replace("_", " ")} director={x.director.replace("_", " ")} />
                ))}
            </div>
         );
}

export default FilmList;





