import React from "react";
import "./Track.module.css";

function Track({ track, onAdd, isRemoval = false,onRemove }){
  const {name, artist,album } = track;

  const handleAdd = () => {
    onAdd(track);
  };
  const handleRemove = () => {
    onRemove(track);
  }

  return(
    <div>
      <h3>{name}</h3>
      <p>{artist} | {album}</p>
      {!isRemoval && <button onClick={handleAdd}>+</button>}
      {isRemoval && <button onClick={handleRemove}>-</button>}
    </div>
  )
}

export default Track;