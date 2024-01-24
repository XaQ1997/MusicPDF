const fs = require('fs');
const path = require('path');

const FileHandler=(pdfDirectory)=> {
  const filesInDirectory = fs.readdirSync(pdfDirectory);

    const pdfFiles = filesInDirectory
      .filter(file => {
        const filePath = path.join(pdfDirectory, file);
        return fs.statSync(filePath).isFile() && file.endsWith('.pdf');
      })
      .map(file => {
        return {
          name: file
        };
      });

  return pdfFiles;
}

module.exports=FileHandler;