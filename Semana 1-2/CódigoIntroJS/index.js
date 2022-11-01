/*alert("Este es un aviso importante");*/

//Variables
var alert3 = "Marcela";
let variable = 32;
const  constante3 = "no cambia";

variable2=34;
variable="kdjfalkf";
alert5="Judy"; 

//Estructuras de datos -> Arreglos
let arreglo = [];
arreglo[0] ="Camilo";
arreglo[1] = "Edson";

let arreglo2 = ["camila", "Alejandra", 34];
arreglo2[3]=45;

console.log(arreglo2);


                        //Estructuras de control 
//Condicional simple
if(variable2==34){
    console.log("La variable es " + variable2);
} 
if(variable2==34){
    console.log("La variable es " + variable2);
} 

//Condicional compuesto 
if(variable2==30){
    console.log("La variable es " + variable2); 
}else {
    console.log("Imprime la negación de la condición")
}
//Condicional anidado 
if(variable2==30){
    if(variable=="abs"){
        console.log("La variable es " + variable2); 
    }
}else{
    if(variable==20){
        console.log("La variable es 20");
    }
}

//Ciclos 

for (let index = 0; index < arreglo2.length; index++) {
    console.log(arreglo2[index]);
}

let index = 5;
while (index < arreglo2.length) {
    console.log(arreglo2[index]);
    index++;
}

console.log("Aquí inicia el ciclo do-while");
do{
    console.log(arreglo2[index]);
    index++;
}while(index < arreglo2.length);

//Funciones tradicional
function imprimirArreglo() {
    var x = document.getElementById("datos")
    x.innerHTML= arreglo;
}

imprimirArreglo();

//Funciones anónimas 

let nombre = function (n2){
    return "Esta es la función anónima es de "+n2+"</br>";
}

document.write(nombre("Marcela"));

//Funciones Flecha 
let nombre2 = () =>{
    return 423423;
}

document.write(nombre2());

//Funciones de autoinvocación
let numero ;
(
function sumar(num){
    let suma =8+num; 
    document.write(suma);
})(numero)


//Funciones dentro de funciones 
function multiplicar(num1, num3){
    function mult(num2){
        return num2*342;
    };
    return 'El resultado es: '+ mult(num1)
}
document.write(multiplicar(4));

//Funciones que retornan funciones

function mostrarNombre(){
    
    alert('si entra a la función');
    return function(n){
          
        alert('jdd' + n);
        };
}
mostrarNombre()("nombre ");





