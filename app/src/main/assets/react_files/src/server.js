const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');

app.get('/api/files', (req, res) => {
  const files = getFiles(); // Funkcja do pobrania listy plików
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
    .get('http://localhost:8000/api/files')  // Zaktualizuj adres API
    .then(response => io.emit('files', response.data))
    .catch(error => console.error('Błąd pobierania danych:', error));
};

function getFiles() {
  const pdfDirectory = path.join(__dirname, '../pdf-directory');
  const directories = fs.readdirSync(pdfDirectory);

  const files = directories.map(directory => {
    const directoryPath = path.join(pdfDirectory, directory);
    const filesInDirectory = fs.readdirSync(directoryPath);

    const pdfFiles = filesInDirectory
      .filter(file => file.endsWith('.pdf'))
      .map(file => ({
        name: file,
        link: `/pdf-directory/${directory}/${file}`,
      }));

    return pdfFiles;
  });

  return files.flat();
}

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

http.listen(8000, () => {
  console.log('Serwer nasłuchuje na porcie 8000');
});