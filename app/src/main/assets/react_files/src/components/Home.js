import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
           <Link to={'/dyrygent'}>
           <button>Dyrygent</button></Link>
           <br />
           <Link to={'/muzyk'}><button>Muzyk</button></Link>
        </div>
    );
  }
}

export default Home;