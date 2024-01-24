import React from 'react';
import {  Link } from 'react-router-dom';

const Home=()=> {
    return (
        <div>
          <h2>Home</h2>
           <Link to={'/dyrygent'}>
           <button>Dyrygent</button></Link>
           <br />
           <Link to={'/muzyk'}><button>Muzyk</button></Link>
        </div>
    );
};

export default Home;