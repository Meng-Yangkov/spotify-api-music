import TrackList from '../TrackList/TrackList';
import React from "react";
import './SearchResults.module.css';

function SearchResults({searchResults}){
  return(
    <div>
      <h2>Results</h2>
      <TrackList tracks={searchResults}/>
    </div>
  )
}

export default SearchResults;