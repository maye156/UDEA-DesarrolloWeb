import React from 'react';
import './App.css';
import {heroes} from '../../data/data.js';
import HeroesCard from '../Heroes/heroes.js';

function showAdditional(additional){
  const alertInformation = Object.entries(additional)
  .map(information => `${information[0]}: ${information[1]}`)
  .join('\n');
  alert(alertInformation);
}


function App() {
  return (
   <div className='wrapper'>
    <h1>HEROES</h1>
    {heroes.map(h => (
      <HeroesCard
        key={h.name}
        name={h.name}
        id={h.id}
        
        additional={h.additional}
        showAdditional={showAdditional}
        owner={h.owner}
       />
    ))}
    </div>
  );
}

export default App;
