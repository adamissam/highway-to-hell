import React from 'react';
import Footer from './components/footer/Footer'; //import de test

import FilmList from './components/pageFilm/FilmList' //import de test
import Carousel from './components/pageFilm/Carousel' // import de test


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Carousel />
      <FilmList />
      <Footer />

    </div>
  );
}

export default App;
