/*let nombre = "Marcela";

function muestraMiNombre(){
  document.body.innerHTML="<h1> Mi nombre es: "+ nombre +"</h1>";
}

muestraMiNombre();

//Función anónima

let saludo = function(){
  return "hola </br>";
}

document.write(saludo());

// Función flecha

const saludo2 = (nombre2)=>{
  return "hola " + nombre2 + "</br>" ;
}

document.write(saludo2("Judy"));
//Función predefinida

let num = "8";
let suma = parseInt(num) + 5;
document.write(suma);
*/

//Funcion de autoinvocación
/*
(function(){
  alert("Hola a todos");
})()

(function(nombre){
  alert("hola "+nombre);
})("Marcela")

//Funciones dentro de otras

function a(num){
  function b(num2){
    return num2*3;
  }
  return b(num);
}

document.write(a(8));

//Función que retorna otra función

function a(){
  alert("Hola");
  return function(){
    return alert("Judy");
  }

}

a()();
*/
//Llamados Call y Apply

function sumar(a,  b){
  return a+b;
}

var c = sumar.call(c, 9, 4);
document.write(c);

c = sumar.apply(c, [8, 6]);
document.write(c);
