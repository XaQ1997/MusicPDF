const express = require('express');
const app = express();
const http = require('http').createServer(app);
const multer=require('multer');

const baseDirectory="../pdf_directory";

const storage=multer.memoryStorage();
const upload=multer({storage});

const fs = require('fs');
const path = require('path');
const axios=require('axios');
const cors=require('cors');
const FileHandler = require('./fileManager.js');

app.use(cors());

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.get('/fileData', (req, res) => {
    console.log("Reading songs");
    //console.log(res);
  const files=FileHandler("../pdf_directory");
  res.json(files);
});

app.get('/songTitle', (req,res) => {
    console.log('Otrzymywanie pliku');
        let file = req.query.text;
    res.json(JSON.stringify({title: file}));
    console.log(res);
})

io.on('connection', (socket) => {
  console.log('Klient połączony');

//  socket.on('readSongs', ()=>{
//        const fileHandler=FileHandler("../../pdf_directory");
//        console.log(fileHandler);
//  });
  socket.on('disconnect', () => {
    console.log('Klient rozłączony');
  });
});

//const fetchData = () => {
//  axios
//    .get('http://localhost:8000/fileData')
//    .then(response => io.emit('fileData', response.data))
//    .catch(error => console.error('Błąd pobierania danych:', error));
//};

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

http.listen(8000, () => {
  console.log('Serwer nasłuchuje na porcie 8000');
});