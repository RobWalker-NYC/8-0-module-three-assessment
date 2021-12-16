import React from 'react';
import "../App.css";


class Locations extends React.Component {
    constructor() {
        super()

        this.state = {
            location: []
        }
    }

    fetchPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/location')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                location: data,
            })
        })
    }

    componentDidMount = () => {
        this.fetchPeople()
    }




  render (){
    return (
      <div className='locations'>

         <h1>This is the Locations page !</h1>

      </div>
    );
  }
}

export default Locations;