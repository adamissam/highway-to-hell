import React from 'react';
import Axios from 'axios';
import Cards from './FilmCard'





const apiUrl = "https://hackathon-wild-hackoween.herokuapp.com/movies"


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        search: '',
        dataApi: [],
        searchResult: ''
    }
  }
    handlClick = (event) => {
      let value = document.getElementById('data-input').value
      this.setState({
          search: value
      }, this.filterApi);
  }
  componentDidMount() {
      Axios.get(apiUrl)
          .then(response => {
              this.setState({
                  dataApi: response.data.movies
              })
          })
          .catch(err => console.log(err))
  }


  filterApi = () => {
      this.state.dataApi.map((movie => {
          movie.title = movie.title.replace(/_/g,' ');
          if (this.state.search.toLowerCase() === movie.title.toLowerCase()) {
              return this.setState({ searchResult: movie })
          }
          return this.state.searchResult
      }));
   
  }

    render() {

      return (
        
        <div className='search'>
          <form>
                <input id="data-input" type="text" placeholder="ex : Castle in the sky"  />
                <button  type="button" onClick={this.handlClick}>Search</button>
          </form>
         {

              this.state.search ? <Cards search={this.state.searchResult}/> :''
         }
        </div>
      );
    }}







export default SearchBar;