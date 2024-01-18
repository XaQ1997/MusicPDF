import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Dyrygent extends Component {
      constructor() {
    super();

    console.log("test konstruktora");

    this.state = {
      songs: [],
      selectedSong: null,
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }
  fetchSongs() {
    axios.get('http://localhost:8000/api/files')
      .then(response => {
        const uniqueNames = new Set();
        console.log("test");

        let data = JSON.stringify(response.data);
        data = JSON.parse(data);
        data.forEach((file) => {
            const fileNameWithoutExtension = file.name.split(".")[0];
            const firstPart = fileNameWithoutExtension.split('|')[0];
            uniqueNames.add(firstPart);
        });
        console.log("test2");
        this.setState({ songs: Array.from(uniqueNames) });
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }

  handleSongSelect = (selectedSong) => {
    this.setState({ selectedSong });
    this.props.socket.emit('selectedSong', selectedSong);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.songs.map((song, index) => (
            <li key={index} onClick={() => this.handleSongSelect(song)}>
              {song}
            </li>
          ))}
        </ul>

        <Link to={'/'}> Home </Link>
      </div>
    );
  }
}

export default Dyrygent;