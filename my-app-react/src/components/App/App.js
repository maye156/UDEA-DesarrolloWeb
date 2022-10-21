import React from 'react';
import './App.css';
import {heroes} from '../../data/data.js';
import heroesCard from '../Heroes/heroes.js';


function App(heroesCard) {
  return (
    <div>
      <h1>heroes</h1>
      {heroes.map(h=> (
        <heroesCard key = {h.name}/>
      ))

      }

    </div>
  );
}

export default App;
