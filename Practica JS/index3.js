//parseInt() --> convertir a numero entero;
//parseFloat()----> convertir a decimal
//Number();



/*
let Suma= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let Suma2= parseInt (prompt('Ingrese otro numero para la suma'));
resultado= Suma+Suma2
alert(`El resultado de la suma es ${resultado}`);


let resta= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let resta2= parseInt (prompt('Ingrese otro numero para la resta'));
resultado= resta- resta2;
alert(`El resultado de la resta es ${resultado}`);

let multiplicacion= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let multiplicacion2= parseInt (prompt('Ingrese otro numero para la multiplicación'));
resultado= multiplicacion * multiplicacion2;
alert(`El resultado de la multiplicación es ${resultado}`);


let division= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let division2= parseInt (prompt('Ingrese otro numero para la división'));
resultado= division / division2;
alert(`El resultado de la división es ${resultado}`);


let modulo= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let modulo2= parseInt (prompt('Ingrese otro numero para conocer el módulo'));
resultado= modulo % modulo2;
alert(`El resultado del módulo es ${resultado}`);
*/



//EJERCICIO 1

let edad= prompt("ingrese su edad");

    if(edad >= 18){
       alert("Usted es mayor de edad")
    }else{
        alert("Usted es menor de edad")
    }

//EJERCICIO 2

let usuario= prompt("ingrese su nombre de usuario");
let clave=prompt("ingrese su clave");

if(usuario == "admin" && clave==1234){
    alert("Bienvenido Admin");
}else{
    alert("Usuario y clave incorrectos");
}




