import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Strona Główna</h2>
    <nav>
      <ul>
        <li><Link to="./master">Przejdź do Master</Link></li>
        <li><Link to="./slave">Przejdź do Slave</Link></li>
      </ul>
    </nav>
  </div>
);

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root')
);