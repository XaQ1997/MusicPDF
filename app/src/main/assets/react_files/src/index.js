import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Strona Główna</h2>
    <nav>
      <ul>
        <li><button><Link to="/master">Przejdź do Master</Link></button></li>
        <li><button><Link to="/slave">Przejdź do Slave</Link></button></li>
      </ul>
    </nav>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Home />
  </Router>
);