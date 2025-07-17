import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';
import styles from './App.module.css';

const App = () => {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults] = useState([
    {
      id: 1,
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      uri: 'spotify:track:0VjIjW4GlUZAMYd2vXMi3b'
    },
    {
      id: 2,
      name: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      uri: 'spotify:track:39LLxExYz6ewLAcYrzQQyP'
    },
    {
      id: 3,
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line',
      uri: 'spotify:track:6UelLqGlWMcVH1E5c4H7lY'
    }
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prev => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(t => t.id !== track.id));
  };

  const savePlaylist = () => {
    // Get the URIs from the playlist tracks
    const trackURIs = playlistTracks.map(track => track.uri);
    
    // For now, just log the data that would be sent to Spotify
    console.log('Playlist Name:', playlistName);
    console.log('Track URIs:', trackURIs);
    
    // Reset the playlist after saving
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    
    // In a real implementation, this would make an API call to Spotify
    alert(`Playlist "${playlistName}" would be saved to Spotify with ${trackURIs.length} tracks`);
  };

  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
};

export default App;

