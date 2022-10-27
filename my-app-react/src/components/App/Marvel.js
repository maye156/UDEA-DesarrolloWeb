import React from 'react';
import './App.css';
//import {showAdditional} from './App'


export function showAdditional(additional){
  const alertInformation = Object.entries(additional)
.map(information => `${information[0]}: ${information[1]}`)
.join('\n');
document.write(alertInformation);
window.location.href='./marvel';
//return alertInformation;

}

export function Marvel() {
  return (
    <div className='wrapper'>
      <h1>INFORMACIÓN HEROES </h1>
      <h2>desde API Marvel</h2> 
      <appDiv></appDiv> 
            </div>
  );
}


//End point + ts=1 + &apikey=publica + &hash= md5(genrar=1+publica+privada)
const marvel = {
  render: ()=> {
    const urlAPI ='http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d7c509a1c93c5deb9692de7bfa12e4e2&hash=ee7fe85a30bc41eac5b34dd07dc0f48c';
    const container = document.getElementById("datos");
    let contentHTML ='';

    fetch(urlAPI)
    .then(res=> res.json())
    .then((json)=>{
      for(const hero of json.data.results){
        let urlHero = hero.urls[0].url;
        contentHTML+= `
        <div class='wrapper'>
        <ahref = ${urlHero} target ="_blank"> 
          <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
          class="img-thumbnail">
        </a>
        <h3 class="title"> ${hero.name}</h3>
        </div>`
      }
     container.innerHTML=contentHTML;
    })
  }
};
marvel.render();

/*

const uriAPI = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d7c509a1c93c5deb9692de7bfa12e4e2&hash=ee7fe85a30bc41eac5b34dd07dc0f48c'
fetch(uriAPI)
  .then(response => response.json())
  .then(json => {
    json.data.results.map(item => {
      let uri = item.thumbnail.path + item.thumbnail.extension
      let urlHero = hero.urls
      //console.log(uri);
      Mel.innerHTML += `<div>
      <a href="${urlHero}">
      </a> 
      <img src=${uri.replace('http', 'https')}/>
      <span>${item.name}</span>
      </div>`
    })
  })
*/
  

