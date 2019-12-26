import React from 'react';
import DescriptionMovie from './DescriptionMovie';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import Movies from './Movies';
import Trailer from './arrayTrailer'
import  './ShowMovie.css'

const ShowMovie = (props) => {
    const [dataApi, setDataApi] = useState([])
    const [dataRedirect, setDataRedirect] = useState('')


    useEffect(() => {
    
        const getApi = async () =>{
             const result =  await Axios("https://hackathon-wild-hackoween.herokuapp.com/movies")
              setDataApi(result.data.movies)
              }
             getApi()
    }, [])

    
        
        
    

    
        const link = Trailer.find(e => e.title.toLowerCase() === props.location.state.identif.toLowerCase())
            
      console.log(link)
        
        
     
    return ( 
        
        <div className='showdecor'>
            {
                dataApi.map(x => (x.title.replace(/_/g,' ').toLowerCase() === props.location.state.identif.toLowerCase()) ? <DescriptionMovie key={x.id} image={x.posterUrl} title={x.title} year={x.year} country={x.country.replace(/_/,' ')} urle={link.url} /> : '')
                
            }
            {/* <Movies urle={link.url} /> */}
        </div>
        
     );
}
 
export default ShowMovie;