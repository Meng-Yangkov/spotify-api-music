import SearchResults from "../SearchResults/SearchResults";
import React,{useState} from "react";
import styles from './App.module.css';

function App(){
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours'
    },
    {
      id: 2,
      name: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia'
    },
    {
      id: 3,
      name: 'Watermelon Sugar',
      artist: 'Harry Styles',
      album: 'Fine Line'
    }
  ]);

  return(
    <div>
        <h1>Jamming</h1>
        <SearchResults searchResults={searchResults}/> 
    </div>
  )
}

export default App;