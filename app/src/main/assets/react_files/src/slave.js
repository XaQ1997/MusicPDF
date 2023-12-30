class SongDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSong: null,
      songFiles: [],
    };
  }

  componentDidMount() {
    this.props.socket.on('selectedSong', (selectedSong) => {
      const filesForSong = getFilesForSong(this.props.files, selectedSong);
      this.setState({ selectedSong, songFiles: filesForSong });
    });
  }

  render() {
    return (
      <div>
        {this.state.selectedSong && (
          <div>
            <h2>{this.state.selectedSong}</h2>
            <ul>
              {this.state.songFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

function getFilesForSong(files, selectedSong) {
  return files
    .filter(file => fileHandler.getName(file.name).song === selectedSong)
    .map(file => ({ name: file.name, link: file.link }));
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<SongDetails socket={socket} files={files} />, document.getElementById('songDetails'));