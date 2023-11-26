import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Header = function() {
  return (
    <h1 id="my-heading">
      <span>Baza danych plików muzycznych w formacie <b>PDF</b></span>
    </h1>
  );
};

function Table({ headers, data }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const headers = ['Tytuł', 'Instrument'];

const FileTable = () => {
  const [filesAndDirectories, setFilesAndDirectories] = useState([]);

  useEffect(() => {
    // Pobierz dane po zamontowaniu komponentu
    fetchData();

    // Utwórz EventSource, aby odbierać dane SSE
    const eventSource = new EventSource('/sse');

    // Obsługa przychodzących danych SSE
    eventSource.onmessage = event => {
      const updatedFilesAndDirectories = JSON.parse(event.data);
      setFilesAndDirectories(updatedFilesAndDirectories);
    };

    // Oczyść EventSource po odmontowaniu komponentu
    return () => {
      eventSource.close();
    };
  }, []);

  const fetchData = () => {
    axios
      .get('/api/files')
      .then(response => setFilesAndDirectories(response.data))
      .catch(error => console.error('Błąd pobierania danych:', error));
  };

  return (
    <div>
      {filesAndDirectories.map(directory => (
        <div key={directory.directory}>
          <h2>{directory.directory}</h2>
          <Table
            headers={headers}
            data={directory.pdfFiles.map(file => [
              <a
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>,
            ])}
          />
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <div>
    <Header />
    <FileTable />
  </div>
);