import React, { useState } from 'react';
import { getFiles, getName } from './server';

const FileList = ({ files }) => {
  const [openedFile, setOpenedFile] = useState(null);

  const handleFileOpen = (fileName) => {
    const name = getName(fileName);
    setOpenedFile(name);
  };

  const uniqueFileNames = Array.from(new Set(files.map((file) => getName(file))));

  return (
    <div>
      <h2>Lista Plików</h2>
      <ul>
        {uniqueFileNames.map((fileName, index) => (
          <li key={index}>
            <span>{fileName}</span>
            <button onClick={() => handleFileOpen(fileName)}>Otwórz</button>
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