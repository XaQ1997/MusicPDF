const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const cors=require('cors');
const FileHandler = require('./fileManager.js');

let songTitle = ""

app.use(cors());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.get('/fileData', (req, res) => {
    console.log("Czytanie nazw plików z folderu");
    const files=FileHandler("../public/files");
    res.json(files);
});

app.get('/songTitle', (req,res) => {
    let readSongTitle = req.query.title;
    if (readSongTitle){
      console.log('Otrzymano tytuł: ', readSongTitle);
      songTitle = readSongTitle
    }
    console.log("Plik na serwerze:", songTitle)
    res.json({title: songTitle});
})

io.on('connection', (socket) => {
  console.log('Klient połączony');
  socket.on('disconnect', () => {
    console.log('Klient rozłączony');
  });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/files',express.static(path.join(__dirname, 'public/files')));

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

http.listen(8000, () => {
  console.log('Serwer nasłuchuje na porcie 8000');
});
