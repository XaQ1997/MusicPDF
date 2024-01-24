import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';

const Muzyk=()=> {
    const initialInstrumentText = "Wybierz instrument..."
    const [instruments, setInstruments]=useState([]);
    const [selectedSong, setSelectedSong]=useState([]);
    const [selectedInstrument, setSelectedInstrument]=useState(initialInstrumentText);
    const [fileUrl, setFileUrl] = useState([])

    const getSelectedSong=()=>{
        axios.get("http://localhost:8000/SongTitle")
        .then(response=>{
            const title = response.data.title
            setSelectedSong(title);
            console.log("Wybrany utwór: ", title)
        })
    }

    const handleInstrumentSelect=(event)=> {
        setSelectedInstrument(event.target.value)
        console.log("Muzyk wybrał instrument: ", event.target.value)
    }

    const fetchSongs=()=> {
        axios.get('http://localhost:8000/fileData')
            .then(response => {
                const songInstruments = new Set();
                songInstruments.add(initialInstrumentText)
                let data = JSON.stringify(response.data);
                data = JSON.parse(data);
                data.forEach((file) => {
                    const fileNameWithoutExtension = file.name.split(".")[0];
                    let secondPart="";

                    if(fileNameWithoutExtension.split('_')[0]===selectedSong)
                    {
                        secondPart = fileNameWithoutExtension.split('_')[1];
                        songInstruments.add(secondPart);
                    }
                });
                setInstruments(Array.from(songInstruments));
                console.log(instruments);
            })
            .catch(error => {
            console.error('Błąd pobierania danych:', error);
            });
        }

    const openPDF=()=> {
        const fileName=selectedSong+"_"+selectedInstrument+".pdf";
        const filePath = "http://localhost:8000/files/"+fileName
        console.log("Otwieranie pliku PDF: ", filePath)
        setFileUrl(filePath);
    }

    return (
        <div>
            <h2>Tryb muzyka</h2>
            <button onClick={getSelectedSong}>Pobierz wybrany utwór</button>
                    Wybrany utwór: {selectedSong}
            <br />
            <button onClick={fetchSongs}>Załaduj dostępne instrumenty</button>
            <h3>Lista instrumentów</h3>
            <select value={selectedInstrument} onChange = {handleInstrumentSelect}>
                {
                    instruments.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button onClick={openPDF}>Otwórz plik nutowy</button>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <br />
            <p align="center"><iframe src={fileUrl} width="80%" height="1000px" /></p>
        </div>
    );
}

export default Muzyk;

