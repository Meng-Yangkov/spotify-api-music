import React from "react";
import "./Track.module.css";

function Track({track}){
  const {name, artist,album} = track;
  return(
    <div>
      <h3>{name}</h3>
      <p>{artist} | {album}</p>
    </div>
  )
}

export default Track;