import React from "react";
import TrackList from "../TrackList/TrackList";

function PlayList({ playlistName, setPlaylistName, playlistTracks,onRemove }){
  return(
    <div>
      <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
      <TrackList tracks={playlistTracks}  isRemoval={true} onRemove={onRemove} />   
      <button>Save to Sportify</button>
    </div>
  )
}

export default PlayList;