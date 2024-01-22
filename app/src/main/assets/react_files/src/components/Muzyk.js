import React, { Component, useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import socketIO from "socket.io-client";

const socket=socketIO.connect('http://localhost:8000');

const Muzyk=()=> {
    const [song, setSong]=useState("SONG-1");

    let instruments=["gitara"];
    let selected=instruments[0];

    useEffect(()=>{
        socket.on('songSelected', (data)=>setSong(data));
    }, [socket, song]);

    const uploadSong=()=>{
        axios.get("http://localhost:8000/api/SongTitle")
        .then(response=>{
            let data = JSON.stringify(response.data);
            data = JSON.parse(data);

            setSong(data.title);
    })}

//  axios.get('http://localhost:8000/api/files')
//      .then(response => {
//        const names = [instruments[0]];
//
//        console.log("test");
//
//        let data = JSON.stringify(response.data);
//        data = JSON.parse(data);
//        data.forEach((file) => {
//            const fileNameWithoutExtension = file.name.split(".")[0];
//            let secondPart="";
//
//            if(fileNameWithoutExtension.split('_')[0]===song)
//            {
//                secondPart = fileNameWithoutExtension.split('_')[1];
//                names.add(secondPart);
//            }
//        });
//        console.log("test2");
//
//        instruments=Array.from(names);
//
//        console.log(instruments);
//      })
//      .catch(error => {
//        console.error('Błąd pobierania danych:', error);
//      });

            const urlPath="http://localhost:8000/api/files/SONG-1_gitara.pdf";
    return (
        <div>
            <div>
                <h2>Tryb muzyka</h2>
                <div>
                    <button onClick={uploadSong}>Pobierz utwór</button>
                    <span>Wybrany utwór: {song}</span>
                </div>
                <h3>Lista utworów</h3>
                    <div role="region" aria-label="Code Example">
                      <select value={selected} onChange = {e=> this.handleSongSelect(e)}>
                          {
                              instruments.map(option => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                          ))}
                      </select>
                    </div>
                </div>
            <button onClick={e=>openPDF(song, selected)}>Otwórz plik</button>
            <br />
            <iframe src={urlPath} width="100%" height="500px" />
           <Link to={'/'}>
             <button>Home</button>
           </Link>
        </div>
    );
}

function openPDF(song, selected)
{
    const fileName=song+"_"+selected+".pdf";

    const path="..\\pdf_directory\\"+fileName;
    const urlPath="http://localhost:8000/api/files";
//    let result="";
//
//    axios.get('http://localhost:8000/api/files/')
//        .then(
//            response=>{
//                const fileName=song+"_"+selected+".pdf";
//
//                let data = JSON.stringify(response.data);
//                data = JSON.parse(data);
//
//                data.forEach((file)=>{
//                    const link=file.name;
//
//                    console.log(link);
//
//                    if(fileName==link)
//                        result=file.link;
//
//                    console.log(result);
//                });
//    });

    console.log(path);

    return(
        <div>
            <iframe url={urlPath} src={path} width="100%" height="500px" />
        </div>
    );
}

export default Muzyk;

