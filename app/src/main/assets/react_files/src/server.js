const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');

// Endpoint do pobierania listy plików
app.get('/api/files', (req, res) => {
  const files = getFilesAndDirectories(); // Funkcja do pobrania listy plików
  res.json(files);
});

// Endpoint SSE do przesyłania aktualizacji do przeglądarki
app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const intervalId = setInterval(() => {
    const files = getFilesAndDirectories(); // Pobierz najnowszą listę plików
    res.write(`data: ${JSON.stringify(files)}\n\n`); // Wysyłaj dane do przeglądarki
  }, 5000); // Interwał aktualizacji (zmień według potrzeb)

  // Zakończ interwał po zamknięciu połączenia z klientem
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

const fetchData = () => {
  axios
    .get('http://localhost:3000/api/files')  // Zaktualizuj adres API
    .then(response => setFilesAndDirectories(response.data))
    .catch(error => console.error('Błąd pobierania danych:', error));
};

const eventSource = new EventSource('http://localhost:3000/sse');

function getFilesAndDirectories() {
  const directories = fs.readdirSync('./pdf-directory');
  const filesAndDirectories = directories.map(directory => {
    const files = fs.readdirSync(`./pdf-directory/${directory}`);
    const pdfFiles = files
      .filter(file => file.endsWith('.pdf'))
      .map(file => ({
        name: file,
        link: `/pdf-directory/${directory}/${file}`,
      }));

    return { directory, pdfFiles };
  });

  return filesAndDirectories;
}

// Dodaj poniższy kod na końcu pliku
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const intervalId = setInterval(() => {
    const filesAndDirectories = getFilesAndDirectories(); // Pobierz najnowszą listę plików i katalogów
    res.write(`data: ${JSON.stringify(filesAndDirectories)}\n\n`); // Wysyłaj dane do przeglądarki
  }, 5000); // Interwał aktualizacji (zmień według potrzeb)

  // Zakończ interwał po zamknięciu połączenia z klientem
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

http.listen(8000, () => {
  console.log('Serwer nasłuchuje na porcie 8000');
});