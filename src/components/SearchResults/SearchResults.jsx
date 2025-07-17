import TrackList from '../TrackList/TrackList';
import React from "react";
import './SearchResults.module.css';

function SearchResults({searchResults,onAdd}){
  return(
    <div>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd}  isRemoval={false}/>
    </div>
  );
};

export default SearchResults;