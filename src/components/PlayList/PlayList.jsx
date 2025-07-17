import React from "react";
import TrackList from "../TrackList/TrackList";

function PlayList({ playlistName, setPlaylistName, playlistTracks }){
  return(
    <div>
      <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
      <TrackList tracks={playlistTracks}  isRemoval={true} />   
      <button>Save to Sportify</button>
    </div>
  )
}

export default PlayList;