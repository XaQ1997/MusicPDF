import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
  <div>
    <h2>Strona Główna</h2>
        <button><a href="master.html">Dyrygent</a></button>
        <br>
        <button><a href="slave.html">Muzyk</a></button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);