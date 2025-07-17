import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./PlayList.module.css";

function PlayList({ playlistName, setPlaylistName, playlistTracks, onRemove, onSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.playlist}>
      {isEditing ? (
        <input
          type="text"
          value={playlistName}
          onChange={handleNameChange}
          onBlur={handleBlur}
          autoFocus
          className={styles.titleInput}
        />
      ) : (
        <h2 onClick={toggleEditing} className={styles.title}>
          {playlistName}
        </h2>
      )}

      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className={styles.saveButton} onClick={onSave}>Save to Spotify</button>
    </div>
  );
}

export default PlayList;
