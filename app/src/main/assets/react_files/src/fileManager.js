const fs = require('fs');
const path = require('path');

class FileHandler {
  constructor(pdfDirectory) {
    this.pdfDirectory = pdfDirectory;
  }

  getName(fileName) {
    const fileNameWithoutExtension = path.basename(fileName, path.extname(fileName));
    const parts = fileNameWithoutExtension.split('|');
    return {
      song: parts[0],
      instrument: parts[1] || 'Brak informacji o instrumencie',
    };
  }

  getFiles() {
    try {
      const filesInDirectory = fs.readdirSync(this.pdfDirectory);

      const pdfFiles = filesInDirectory
        .filter(file => {
          const filePath = path.join(this.pdfDirectory, file);
          return fs.statSync(filePath).isFile() && file.endsWith('.pdf');
        })
        .map(file => {
          const filePath = path.join(this.pdfDirectory, file); // Definicja filePath przed użyciem
          return {
            name: file,
            link: filePath,
          };
        });

      return pdfFiles;
    } catch (error) {
      console.error('Błąd podczas pobierania plików:', error);
      return [];
    }
  }
}

module.exports = FileHandler;