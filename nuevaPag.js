//Algo
/*const fs = require ('fs');

let data = fs.readFileSync('../../data/heroes.json');
//console.log(data);
let hero = JSON.parse(data).heores;
console.log(hero);
console.log(typeof(hero));
*/
//Otra forma
/*let jsonData = require('../../data/heroes.json');
console.log(jsonData);
console.log(typeof(jsonData));
*/
/*
//Para escribir un archivo
const fs = require ('fs');
let data = {
    "poderes":[{
        "codigo":"9384",
        "poder":"volar"
    },
    {
        "codigo":"935453484",
        "poder":"rayos x"
    },

]
}
let jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(typeof(jsonData));

fs.writeFile('../../data/poderes.json', jsonData, (error) =>{
    if(error){
        console.log(`Error: ${error}`);
    }else{
        console.log("Archivo JSON generado correctamente");
    }
})

*/
//Agregar un nuevo dato al archivo 
/*
const fs = require('fs');
let params = {
    "codigo": 333,
    "poder": "Super velocidad"

}// Escribe la opción de archivo json
function writeJson(params) {
    // Ahora lee el archivo json

    fs.readFile('../../data/poderes.json', function (err, poderes) {
        if (err) {
            return console.error(err);
        }
        let poder = poderes.toString();// Convertir datos binarios a cadena
        poder = JSON.parse(poder);// Convierte la cadena en un objeto json
        console.log(poder);
        poder.poderes.push(params);// Empuja el objeto pasado en el objeto de matriz
        poder.total = poder.poderes.length;// Defina el número total de entradas para sentar las bases para futuras paginación
        console.log(poder.poderes);
      
        var str = JSON.stringify(poder);// Debido a que el archivo de escritura de nodejs solo reconoce cadenas o números binarios, el objeto json se convierte en una cadena y se reescribe en el archivo json
        fs.writeFile('../../data/poderes.json', str, function (err) {
            if (err) {
                console.error(err);
            }
            console.log('----------agregado exitosamente-------------');
            console.log(poder.poderes);

        })
    })
}
writeJson(params)//Ejecutalo;
*/

//Modificar un dato 
const fs = require('fs');
let params = {
    "poder":"Super fuerza"
}
function changeJson(id,params){
    fs.readFile('../../data/poderes.json',function(err,poderes){
        if(err){
            console.error(err);
        }
        var poder = poderes.toString();//convertir a cadena
        poder = JSON.parse(poder);//convertir a formato json
        // Leer los datos y modificarlos
        for(let i = 0; i < poder.poderes.length;i++){
            if(id === poder.poderes[i].codigo){
                for(let key in params){
                    if(poder.poderes[i][key]){
                        poder.poderes[i][key] = params[key];
                    }
                }
            }
        }
        poder.total = poder.poderes.length;
        let str = JSON.stringify(poder);
        //console.log(str);
        fs.writeFile('../../data/poderes.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('-------------------- Modificado con éxito');
            console.log(poder.poderes);
        })
    })
}
changeJson(9384,params)//Ejecutalo;

/*import {Fragment} from 'react'

//componente 
export function Ap() {
    return (
        <Fragment>
            <h1> Mi aplicación </h1>
            <h2> es muy bonita </h2>
        </Fragment>

    );
}
*/