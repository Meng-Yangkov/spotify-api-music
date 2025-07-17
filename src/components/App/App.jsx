import SearchResults from "../SearchResults/SearchResults";
import React, { useState } from "react";
import styles from './App.module.css';
import PlayList from "../PlayList/PlayList";

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
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

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  };

  return (
    <div>
      <h1>Jamming</h1>
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <PlayList
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
       />
    </div>
  )
}

export default App;