import React from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './SearchResults.module.css';

const SearchResults = ({ searchResults, onAdd }) => {
  return (
    <div>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
};

export default SearchResults;