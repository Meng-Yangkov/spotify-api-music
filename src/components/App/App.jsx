import SearchResults from "../SearchResults/SearchResults";
import React, { useState } from "react";
import styles from './App.module.css';
import PlayList from "../PlayList/PlayList";

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 10,
      name: 'As It Was',
      artist: 'Harry Styles',
      album: 'Harry’s House',
    },
    {
      id: 11,
      name: 'Stay',
      artist: 'The Kid LAROI & Justin Bieber',
      album: 'Stay (Single)',
    }
  ]);
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours'
    },
    {
      id: 2,
      name: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia'
    },
    {
      id: 3,
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line'
    }
  ]);

  return (
    <div>
      <h1>Jamming</h1>
      <SearchResults searchResults={searchResults} />
      <PlayList
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
       />
    </div>
  )
}

export default App;