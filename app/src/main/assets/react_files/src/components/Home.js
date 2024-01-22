import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import FileHandler from '../fileManager';

import socketIO from "socket.io-client";

const socket=socketIO.connect('http://localhost:8000');
const Home=()=> {
    const handleButton = ()=>{
        axios.get("http://localhost:8000/fileData");
    };

    return (
        <div>
        <button onClick={handleButton}>Upload Files</button>
          <h2>Home</h2>
           <Link to={'/dyrygent'}>
           <button>Dyrygent</button></Link>
           <br />
           <Link to={'/muzyk'}><button>Muzyk</button></Link>
        </div>
    );
};

export default Home;