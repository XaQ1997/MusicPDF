const path = require('path');

function getName(fileName) {
  const fileNameWithoutExtension = path.basename(fileName, path.extname(fileName));
  const parts = fileNameWithoutExtension.split('_'); // Zakładam, że separator to '_'

  return parts[0];
}

import React, { useState } from 'react';
import { getFiles } from './server'; // Załóż, że plik server.js znajduje się w tym samym katalogu co plik komponentu

const FileList = ({ files }) => {
  const [openedFile, setOpenedFile] = useState(null);

  const handleFileOpen = (getName(fileName)) => {
    setOpenedFile(fileName);
  };

  return (
    <div>
      <h2>Lista Plików</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <span>{file}</span>
            <button onClick={() => handleFileOpen(file)}>Otwórz</button>
          </li>
        ))}
      </ul>
      {openedFile && (
        <div>
          <h3>Otwarty Plik: {openedFile}</h3>
        </div>
      )}
    </div>
  );
};

const files = getFiles();

const App = () => {
  return <FileList files={files} />;
};

export default App;