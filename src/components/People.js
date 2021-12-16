import React from 'react';
import "../App.css";


class People extends React.Component {
    constructor() {
        super()

        this.state = {
            people: []
        }
    }

    fetchPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                people: data,
            })
        })
    }

    componentDidMount = () => {
        this.fetchPeople()
    }

    // let peolpeDisplay = this.state.people.map((people) => {
    //     return(
    //         <div>
          
    //            <div>

    //            </div>


    //         </div>
    //     )
    // })


  render (){
    return (
      <div className='people'>

        <h1>Search for a Person</h1>
    
      </div>
    );
  }
}

export default People;