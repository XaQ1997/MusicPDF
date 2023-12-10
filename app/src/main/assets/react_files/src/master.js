class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: null,
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }

  fetchSongs() {
    axios.get('/api/files')
      .then(response => {
        const uniqueFirstParts = new Set();

        response.data.forEach((file) => {
          const firstPart = fileHandler.getName(file.name).song;
          uniqueFirstParts.add(firstPart);
        });

        this.setState({ songs: Array.from(uniqueFirstParts) });
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
        <h1>Lista Utworów</h1>
        <ul>
          {this.state.songs.map((song, index) => (
            <li key={index} onClick={() => this.handleSongSelect(song)}>
              {song}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<SongList socket={socket} />, document.getElementById('songList'));