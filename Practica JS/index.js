
<h2>Arrays</h2>

let banana ="banana";
let manzana="manzana";
let peras="peras";
let pepe = "pepe perez";

let falso= false;
let verdadero=true;
let indefinido; //No le asigne ningun valor
let noExiste=null; 



console.log(falso); //Booleanas
console.log(verdadero);
console.log(indefinido);



//creamos un array de frutas
             //  0          1         2
let frutas=["banana", "manzanas","peras"];
 
console.log(`La cantidad de datos en el arreglo frutas es de ${frutas.length}`);


//             0      1        2        3               4       5 
let persona=["pepe", "perez",123456,"San Martin 1200", true ,"Misiones"];

console.log(`La cantidad de datos en el arreglo persona es de ${persona.length}`);




let estudiantes = [];
console.log(`La cantidad de datos en el arreglo persona es de ${estudiantes.length}`);

//objetos de Js(json)
JSON 

let objetoJson = {
    nombre: 'pepe',
    apellido:'perez',
    dni:12345,
    direccion:'san martin 1200',
    pais:'argentina',


}
console.log(objetoJson);

//Operadores aritmeticos
//+-*/%

let miNumero = 100;
let otroNumero= 200;
let resultado;

resultado= miNumero + otroNumero;
console.log('El resultado de la suma es ${resultado)}') ;

resultado= miNumero - otroNumero;
console.log('El resultado de la resta es ${resultado)}') ;

resultado= miNumero * otroNumero;
console.log('El resultado de la multiplicacion es ${resultado)}') ;

resultado= miNumero % otroNumero;
console.log('El resultado del modulo es ${resultado)}') ;

resultado= miNumero / otroNumero;
console.log('El resultado de la divicion es ${resultado)}') ;


//parseInt() --> convertir a numero entero;
//parseFloat()----> convertir a decimal
//Number();




let data= parseInt (prompt ('Ingrese un numero para la calculadora: '));
let dataDos= parseInt (prompt('Ingrese otro numero para la calculadora'));
resultado= data + dataDos;
alert('El resultado de la suma es ${resultado}');













//contador
let contador = 0;
console.log(`El contador esta en ${contador}`)

//incremento
contador= contador + 1;
console.log(`el contador esta en ${contador}`)

contador++ // incremento con paso 1
console.log ( `el contador esta en ${contador}`);

contador= contador +2;
console.log( `el contador esta en ${contador}`);

// Decremento

contador= contador-1;
contador--; //decremento paso 1
contador -=2;// decremento con paso 2
contador -=50; // decremento con paso 50
console.log( `el contador esta en ${contador}`);












//operadores relacionales

//<> == === != !


let edad= 18;
let email=prompt('introduce tu email:');
let Admin ='Juan';

//Operadores logicos

//&& 

// condicionales 
/* if (condition){



  
}

if(true){
    se ejecuta el codigo
}

if(false){
    no se ejecuta
}
*/


if (edad< 18){ // false
    console.log(`No puede comprar bebidas poruqe tiene ${edad} años de edad`)
}

if (edad > 18){ // fase
    console.log(` NO puede comprar bebidas poruqe tiene ${edad} años de edad`)
}

if(edad >= 18){ //true
    console.log(` SI puede comprar bebidas poruqe tiene ${edad} años de edad`)
}

if(email=='juan@gmail.com'){
    console.log('Bienvenido administrador ${Admin }');
    alert ('Bienvenido Administrador ${Admin}');
     }else{
        alert('Email incorrecto, No es el Administrador');
     }


    

