const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000; // Dowolny port, na którym chcesz uruchomić serwer

// Endpoint do pobierania listy plików
app.get('/api/files', (req, res) => {
  const directoryPath = 'https://github.com/XaQ1997/MusicPDF/blob/a1d19cef77afd471e4e4a049da91d367034f29a9/app/react_files/pdf_directory'; // Zmień na rzeczywistą ścieżkę

  // Odczytaj pliki z katalogu
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Błąd odczytu katalogu:', err);
      res.status(500).json({ error: 'Błąd odczytu katalogu' });
      return;
    }

    // Przygotuj dane do wysłania
    const fileData = files.map((fileName) => ({
      name: fileName,
      directory: directoryPath,
      link: `/api/files/download/${fileName}`, // Endpoint do pobierania pliku
    }));

    res.json(fileData);
  });
});

// Endpoint do pobierania plików
app.get('/api/files/download/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join('https://github.com/XaQ1997/MusicPDF/blob/a1d19cef77afd471e4e4a049da91d367034f29a9/app/react_files/pdf_directory', fileName); // Zmień na rzeczywistą ścieżkę

  // Wysyłanie pliku w odpowiedzi
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('Błąd podczas pobierania pliku:', err);
      res.status(500).json({ error: 'Błąd pobierania pliku' });
    }
  });
});

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});