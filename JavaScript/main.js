/*//Importación normal
import {heroes} from './datos/data.js';

console.log(heroes);


//Importación por defecto 
import heroes from './datos/data.js';
console.log(heroes);
*/
//Import/ export individual 

import heroes, {owner} from './datos/data.js';



//Find
 export const getHeroeById = (id)=>{
    return heroes.find(( heroe )=> heroe.id == id);
  }
 //   console.log(getHeroeById(5));
 
 //Filter
    const getHeroeByOwner = ( owner )=> heroes.filter(( heroe ) => heroe.owner == owner);
     
   console.log(getHeroeByOwner('Marvel'));



