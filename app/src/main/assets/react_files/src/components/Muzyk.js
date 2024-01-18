import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Muzyk extends Component {
  render() {
    return (
        <div>
          <h2>Lista nut 2</h2>
           <Link to={'/'}> Home </Link>
        </div>
    );
  }
}

export default Muzyk;