import React from 'react';
import ReactDOM from 'react-dom';
//import axios form 'axios';
//
//const FileHandler = require('./fileManager.js');

//class SongList extends React.Component {
//      constructor(props) {
//    super(props);
//
//    console.log("test konstruktora");
//
//    this.state = {
//      songs: [],
//      selectedSong: null,
//    };
//  }
//
//  componentDidMount() {
//    this.fetchSongs();
//  }
//  fetchSongs() {
//    axios.get('/api/files')
//      .then(response => {
//        const uniqueNames = new Set();
//        console.log("test");
//        response.data.forEach((file) => {
//          const firstPart = fileHandler.getName(file.name).song;
//          uniqueNames.add(firstPart);
//        });
//        console.log("test2");
//        this.setState({ songs: Array.from(uniqueNames) });
//      })
//      .catch(error => {
//        console.error('Błąd pobierania danych:', error);
//      });
//  }
//
//  handleSongSelect = (selectedSong) => {
//    this.setState({ selectedSong });
//    this.props.socket.emit('selectedSong', selectedSong);
//  };
//
//  render() {
//    return (
//      <div>
//        <ul>
//          {this.state.songs.map((song, index) => (
//            <li key={index} onClick={() => this.handleSongSelect(song)}>
//              {song}
//            </li>
//          ))}
//        </ul>
//
//        <Link to={'/'}> Home </Link>
//      </div>
//    );
//  }
//}

const fileHandler=new FileHandler("../pdf_directory");
//
//const [songs, setSongs] = useState([]);
//const [selectedSong, setSelectedSong] = useState(null);
//
//useEffect(() => {
//fetchSongs();
//}, []);
//
//const fetchSongs = () => {
//axios.get('/api/files')
//  .then(response => {
//    const uniqueNames = new Set();
//    response.data.forEach((file) => {
//      const name=fileHandler.getName(file.name);
//      const firstPart = name.song;
//      uniqueNames.add(firstPart);
//    });
//    setSongs(Array.from(uniqueNames));
//  })
//  .catch(error => {
//    console.error('Błąd pobierania danych:', error);
//  });
//};
//
//const handleSongSelect = (selectedSong) => {
//setSelectedSong(selectedSong);
//};

function SongList ()
{
    const text = "Hello";
    return text;
}

export default SongList;
//const root = ReactDOM.createRoot(document.getElementById('song_list'));
//root.render(<SongList />);