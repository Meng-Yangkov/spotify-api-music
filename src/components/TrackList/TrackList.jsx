import React from "react";
import Track from '../Track/Track';
import './TrackLists.module.css';

function TrackList({ tracks = [], onAdd, isRemoval }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          isRemoval={isRemoval} // <-- use the prop, don't hardcode
        />
      ))}
    </div>
  );
}


export default TrackList;
