import React from 'react';
import { Media } from 'reactstrap';
import Movies from './Movies';

const DescriptionMovie = ({image, title,year,country,urle}) => {
 
  return (
    <Media className="Mediaclass">
      <Media left>
        <Media  src={image} alt="Generic placeholder image" />
      </Media>
      <div className='mediaBody'>
        <div  >
          <h2 className='mediHeader'> {title}</h2>
        </div>
          <Movies urle={urle} />
          <div className='infomedia'>
            <p>year: {year}</p>
          <p>country {country}</p>
          </div>
      </div>
      
    </Media>
  );
};

export default DescriptionMovie;
