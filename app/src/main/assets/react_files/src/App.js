import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dyrygent from './components/Dyrygent';
import Muzyk from './components/Muzyk';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>MusicPDF</h2>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/dyrygent' element={<Dyrygent />} />
              <Route path='/muzyk' element={<Muzyk />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
