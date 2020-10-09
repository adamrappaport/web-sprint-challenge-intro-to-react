import React, { useState } from 'react';
import Character from "./components/Character"
import './App.css';
import axios from 'axios';

const App = () => {
  const [baseUrl] = useState("https://rickandmortyapi.com/api/character/")
 
  const [characters, setCharacters] = useState([])

  useState(() => {
   
    axios.get(baseUrl)
    .then((res) => {
      console.log(res)
      setCharacters(res.data.results)
    })
    .catch((err) =>{
      console.log("there is an error", err)
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Szechuan sauce</h1>
  
      {
        characters.map((character, index) => {
          return <Character key= {index} character={character}  />
        })
        }

    </div>
  );
}

export default App;