import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import socketIO from "socket.io-client";

const socket=socketIO.connect('http://localhost:8000');

const Dyrygent=()=>{
    const initialState="Wybierz utwór...";

    const [songs, setSongs]=useState([]);
    const [selected, setSelected]=useState(initialState);

  const fetchSongs=()=> {
    axios.get('http://localhost:8000/fileData')
      .then(response => {
        const uniqueNames = new Set();
        uniqueNames.add(initialState);
        let data = JSON.stringify(response.data);
        data = JSON.parse(data);
        data.forEach((file) => {
            const fileNameWithoutExtension = file.name.split(".")[0];
            const firstPart = fileNameWithoutExtension.split('_')[0];
            uniqueNames.add(firstPart);
        });
        setSongs(Array.from(uniqueNames));
        console.log(songs);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }

  const handleSongSelect=(event)=> {
    setSelected(event.currentTarget.value);
    console.log("Dyrygent wybrał: ", event.currentTarget.value);
  };

  const sendToServer= () =>{
    console.log("Wysylanie do serwera:",selected);
    const temp = {title: selected};
//    const blob = new Blob([JSON.stringify(temp, null, 2)], {type: 'application/json;charset=utf-8'});
//    const formData = new FormData();
//    formData.append('file', blob, 'songTitle.json');
//    console.log(formData);
    axios.get('http://localhost:8000/songTitle', {params: {text: selected}});


    console.log("Wyslano");
//    socket.emit('songSelected', selected);
  };

    return (
      <div>
      <h2>Tryb dyrygenta</h2>
        <button onClick={fetchSongs}>Załaduj utwory</button>
      <h3>Lista utworów</h3>
          <div role="region" aria-label="Code Example">
            <select value={selected} onChange = {handleSongSelect}>
                {
                    songs.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                ))}
            </select>
        </div>
        <br />
        <button onClick={sendToServer}>Zatwierdź wybór utworu</button>
        <br />
        <Link to={'/'}>
        <button>Home</button>
        </Link>
      </div>
    );
}

export default Dyrygent;