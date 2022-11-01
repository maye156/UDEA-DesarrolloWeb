let marca;
let distribuidor;
let cantidad;
let menu;

menu= "Ingrese la opción que dese realizar </br>"+
"1- Ingresar pastillas </br>"+
"2- Consultar por cantidad </br>"+
"3- Consultar por distribuidor </br>"+
"4- Eliminar pastillas </br>"+
"5- Mostrar pastillero </br>" +
"6- Salir </br>";

do{
    document.write(menu);
    datoEvalular = parseInt(prompt("Digite opción"));
switch(datoEvalular){
    case 1:
        ingresarPastillas();
        break;
    case 2:
    
    break;
    
    case 3:
    
    break;

    default:
        break;
}
}while(datoEvalular != 6);

function ingresarPastillas(){
    marca = prompt("Digite marca");
    distribuidor = prompt("Digite distribuidor");
    cantidad = prompt("Digite cantidad");
}