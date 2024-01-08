const SongDetails = ({ socket, files }) => {
  const [selectedSong, setSelectedSong] = React.useState(null);
  const [songFiles, setSongFiles] = React.useState([]);

  React.useEffect(() => {
    const handleSelectedSong = (selectedSong) => {
      const filesForSong = getFilesForSong(files, selectedSong);
      setSelectedSong(selectedSong);
      setSongFiles(filesForSong);
    };

    socket.on('selectedSong', handleSelectedSong);

    return () => {
      // Czyszczenie subskrypcji, aby uniknąć wycieków pamięci
      socket.off('selectedSong', handleSelectedSong);
    };
  }, [socket, files]);

  return (
    <div>
      {selectedSong && (
        <div>
          <h2>{selectedSong}</h2>
          <ul>
            {songFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Funkcja bezpośrednio w miejscu użycia
const getFilesForSong = (files, selectedSong) =>
  files
    .filter(file => fileHandler.getName(file.name).song === selectedSong)
    .map(file => ({ name: file.name, link: file.link }));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SongDetails socket={socket} files={files} />, document.getElementById('songDetails'));