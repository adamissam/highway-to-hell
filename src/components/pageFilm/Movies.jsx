import React from 'react'
import ReactPlayer from 'react-player'
// import './Movie.css'
 
const Movies = ({urle}) => {

    return <div ><ReactPlayer className="player" url={urle} /></div>
    
  }

export default Movies;