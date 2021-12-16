import React from 'react';
import "../App.css";


class Movies extends React.Component {
    constructor() {
        super()

        this.state = {
            movie: [],
            movieTitle: null,
            movieDate: null,
            movieDescrip: null
        }
    }

    fetchPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                movie: data,
            })
        })
    }

    componentDidMount = () => {
        this.fetchMovie()
    }

    handledropDownChange = (event) =>{
        this.setState({
            movieTitle: event.target.value,
        })
    }

  render (){
     
      let dropDownOption =this.state.movie.map((movie) => {
    return <option value='movie.title'>{movie.title}</option>;
})

    let currentMovieObject = this.state.movie.find((movie) => {
        return movie.title2 === this.state.currentMovie
    })

    return (
      <div className='movies'>
          <h1>Select a Movie</h1>
          <select onChange={this.handledropDownChange}>
             <option></option>
             {dropDownOption}
          </select>
          <h2>Title:{currentMovieObject?.title}</h2>
          {/* <h2>Release Date:{}</h2>
          <h2>Description:{}</h2> */}
    
      </div>
    );
  }
}

export default Movies;