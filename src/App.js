import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Locations from './components/Locations';
import Movies from './components/Movies';
import People from './components/People';


class App extends React.Component {
  render (){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/locations' component={Locations}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/people' component={People}/>
        </Switch>
      </div>
    );
  }
}

export default App;