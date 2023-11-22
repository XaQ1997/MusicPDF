const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

// Endpoint do pobierania listy plików
app.get('/api/files', (req, res) => {
  const directoryPath = path.join(__dirname, 'pdf_directory');

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
  const filePath = path.join(__dirname, 'pdf_directory', fileName);

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