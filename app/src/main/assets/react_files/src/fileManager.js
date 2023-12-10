const fs = require('fs');
const path = require('path');

class FileHandler {
  constructor(pdfDirectory) {
    this.pdfDirectory = pdfDirectory;
  }

  getName(fileName) {
    const fileNameWithoutExtension = path.basename(fileName, path.extname(fileName));
    const parts = fileNameWithoutExtension.split('-');
    return {
      song: parts[0],
      instrument: parts[1] || 'Brak informacji o instrumencie',
    };
  }

  getFiles() {
    const filesInDirectory = fs.readdirSync(this.pdfDirectory);

    const pdfFiles = filesInDirectory
      .filter(file => fs.statSync(path.join(this.pdfDirectory, file)).isFile() && file.endsWith('.pdf'))
      .map(file => ({
        name: file,
        link: '../pdf-directory/${file}',
      }));

    return pdfFiles;
  }
}