import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Navbar extends React.Component {
  render (){
    return (
      <div>
          <nav className="Navbar">
            <Link to='/'>
                <img className='logo-pic' src='https://www.freeiconspng.com/uploads/clapperboard-png-1.png' alt='logo' />
            </Link>
            <Link to='/location'>Locations</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
          </nav>
      </div>
    );
  }
}

export default Navbar;