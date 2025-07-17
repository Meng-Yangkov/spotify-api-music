import React from "react";
import "./Track.module.css";

function Track({ track, onAdd, isRemoval = false }){
  const {name, artist,album } = track;

  const handleAdd = () => {
    onAdd(track);
  };

  return(
    <div>
      <h3>{name}</h3>
      <p>{artist} | {album}</p>
      {!isRemoval && <button onClick={handleAdd}>+</button>}
    </div>
  )
}

export default Track;