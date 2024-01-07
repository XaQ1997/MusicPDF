import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => (
  <>
    <h2>Strona Główna</h2>
    <button onClick={() => window.location.href = 'master.html'}>Dyrygent</button>
    <br />
    <button onClick={() => window.location.href = 'slave.html'}>Muzyk</button>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);