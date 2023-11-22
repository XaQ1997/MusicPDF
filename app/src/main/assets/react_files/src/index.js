import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';
import axios from 'axios';

const Header = function() {
    return (
      <h1 id="my-heading">
        <span>Baza danych plików muzycznych w formacie <b>PDF</b></span>
      </h1>
    );
};

function Table({ headers, initialData }) {
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
          {initialData.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

const headers = ['Tytuł', 'Instrument'];

// Komponent, który pobiera dane z API
const FileTable = () => {
    const [files, setFiles] = React.useState([]);

    React.useEffect(() => {
      // Pobierz informacje o plikach z API
      axios.get('/api/files')
        .then(response => setFiles(response.data))
        .catch(error => console.error('Błąd pobierania danych:', error));
    }, []); // Pusta tablica oznacza, że useEffect wykona się tylko raz po zamontowaniu komponentu

    return (
      <Table headers={headers} initialData={files.map(file => [file.directory, <a href={file.link} target="_blank" rel="noopener noreferrer">{file.name}</a>])} />
    );
};

ReactDOM.render(
    <div>
      <Header />
      <FileTable />
    </div>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();