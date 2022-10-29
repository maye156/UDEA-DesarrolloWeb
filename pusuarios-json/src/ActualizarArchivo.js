var myModule = require('./App');

var nombre = myModule.name;
//Modificar un dato 
const fs = require('fs');
let params = {
    "poder": nombre
}
function changeJson(id,params){
    fs.readFile('../public/poderes.json',function(err,poderes){
        if(err){
            console.error(err);
        }
        var poder = poderes.toString();//convertir a cadena
        poder = JSON.parse(poder);//convertir a formato json
        // Leer los datos y modificarlos
        for(let i = 0; i < poder.poderes.length;i++){
            if(id === poder.poderes[i].codigo){
                console.log('id lo mismo');
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
        fs.writeFile('../public/poderes.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('-------------------- Modificado con éxito');
            console.log(poder.poderes);
        })
    })
}
changeJson(444, params)//Ejecutalo;

