const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const FileHandler = require('./fileManager.js');

app.get('/api/files', (req, res) => {
  let fileHandler= new FileHandler("../pdf_directory")
  const files = fileHandler.getFiles(); // Poprawiony sposób tworzenia instancji FileManager
  res.json(files);
});

io.on('connection', (socket) => {
  console.log('Klient połączony');
  socket.on('disconnect', () => {
    console.log('Klient rozłączony');
  });
});

const fetchData = () => {
  axios
    .get('http://localhost:8000/api/files')
    .then(response => io.emit('files', response.data))
    .catch(error => console.error('Błąd pobierania danych:', error));
};

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

http.listen(8000, () => {
  console.log('Serwer nasłuchuje na porcie 8000');
});