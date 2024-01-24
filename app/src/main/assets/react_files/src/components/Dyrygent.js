import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dyrygent=()=>{
    const initialState="Wybierz utwór...";

    const [songs, setSongs]=useState([]);
    const [selectedSong, setSelectedSong]=useState(initialState);

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
    setSelectedSong(event.currentTarget.value);
    console.log("Dyrygent wybrał: ", event.currentTarget.value);
  };

  const sendToServer= () =>{
    console.log("Wysylanie do serwera:",selectedSong);
    axios.get('http://localhost:8000/songTitle', {params: {title: selectedSong}});
    console.log("Wyslano");
  };

    return (
      <div>
      <h2>Tryb dyrygenta</h2>
        <button onClick={fetchSongs}>Załaduj dostępne utwory</button>
      <h3>Lista utworów</h3>
          <div role="region" aria-label="Code Example">
            <select value={selectedSong} onChange = {handleSongSelect}>
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