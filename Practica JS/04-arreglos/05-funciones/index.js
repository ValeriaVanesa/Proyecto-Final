//funciones: porciones de codigo con alguna tarea especifica.

function miFuncionSaludar(){
console.log("hola mundo");
}

//para ejecutar una funcion la invocamos con su nombre

miFuncionSaludar();
miFuncionSaludar();
miFuncionSaludar();
miFuncionSaludar();
miFuncionSaludar();

let nombre="pepe";//variable global

//funcion con un parametro/argumento/informacion para ejecutarse
function otroSaludo(nombrePersona){ // esta es una variable local
    console.log(`hola mundo, soy ${nombrePersona}`);
}

otroSaludo("juan");




let otroNombre="pepe";
otroSaludo(otroNombre);