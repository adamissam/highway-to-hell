import React from 'react';

import Footer from './components/footer/Footer'; //import de test
import Carousel from './components/pageFilm/Carousel' // import de test
import SearchBar from './components/pageFilm/SearchBar' // import de test


import './App.css';

function App() {
  return (
    <div className="App">
      
      <Carousel />
      <SearchBar />
      <Footer />

    </div>
  );
}

export default App;
