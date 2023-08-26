/*
alert ("Bienvenido a la app de arrays");


let productos=[]
console.log(`los productos del arreglo son:${productos}`);
console.log(`la cantidad de productos del arreglo es:${productos.length}`);
let confirmar=confirm("Desea guardar un producto?");

let cantidadProducto= parseInt(prompt("cuantos productos desea cargar"));
console.log(`la cantidad de productos a cargar son ${cantidadProducto}`);
let inicio=1;


while(inicio<=cantidadProducto){


console.log(`la respuesta del cliente es:${confirmar}`);
let agregoProducto =prompt("introduzca un producto:");
productos.push(agregoProducto);
console.log(`los productos del arreglo son:${productos}`);
console.log(`la cantidad de productos del arreglo es:${productos.length}`);
    //limitar la ejecucion del bucle
//confirmar=false
inicio++
confirm("Desea guardar productos?");
}





//metodo para guardar datos en el array



 //( aceptar o cancela elecciones del cliente)

//el confirm me retorna un valor booleano


//imprimir listado de productos

for(let i=0; i<productos.length;i++){
    console.table(`${i}-productos:${productos[i]}`);
}


alert("Bienvenido a la app de arrays");

let productos=[];
let inicio=1;
let confirmar=confirm('¿Desea guardar un producto?')

let cantidadProducto= parseInt(prompt("¿Cuantos productos desea cargar?"));
console.log(`La cantidad de productos a cargar es de: ${cantidadProducto}`);

while(inicio <= cantidadProducto){
    console.log(`la respuesta del cliente es:${confirmar}`)
    let agregoProducto=prompt("¿Qué producto desea cargar?");
    productos.push(agregoProducto);
    inicio++
    console.log(`Los productos son:${productos}`);
    console.log(`la cantidad de productos es de: ${productos.length}`);
}*/
/*
let button =document.querySelector("button");

function suscribirse(){
    let confirmar = confirm("¿Desea suscribirse?");
    document.write("Gracias por suscribirse");
}

button. addEventListener("click", suscribirse);
*/


