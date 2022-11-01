import {getHeroeById} from './main.js'

const getHeroeByIdAsync = (id) => {

return new Promise ((resolve, reject) =>{
 setTimeout(()=> {
    const p = getHeroeById(id);
    if(p){
        resolve(p);
    }else {
        reject ('no se cumplio la promesa - no encontró el heroe');
    }

 }, 2000)
}); 

}

getHeroeByIdAsync(1)
 .then (heroe => console.log('Heroe', heroe))
 .catch(err => console.warn(err))