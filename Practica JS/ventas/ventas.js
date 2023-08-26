


//EJERCICIOS DE OPERADORES EN JS



/*
let cantidadProductos = 0;
let saldoTarjetaEfectivo= 5000;
let precioProducto=2000;
let stockProducto=100;
let cantidadVenta=0;


if(saldoTarjetaEfectivo >= precioProducto){
console.log("compra realizada");
cantidadProducto ++;
//restamos el producto vendido del stock
stockProducto--;
//restamos el costo del producto comprado
saldoTarjetaEfectivo= saldoTarjetaEfectivo-precioProducto;
console.log("cliente: compro"+ cantidadProductos);
console.log("cliente, su saldo en la tarjeta es de:" + saldoTarjetaEfectivo)
//sumamos la cantidad de producto vendidos
cantidadventa++;

console.log("admin:sus ventas del dia son:" + cantidadVenta +"productos");
console.log("el dinero disponible en caja es de: " + precioProducto);
console.log("el stock disponible es de:"+ stockProducto);
}else{
    console.log("No se realizo la compra");
}

//BUCLES: CICLOS QUE REPITEN CODIGO SEGUN LA NECESIDAD

let productos= [];
let persona=["pepe","perez",12345, "san martin 123",true,"misiones"]
console.log("personas");
console.log("la cantidad de datos de la persona es:${persona.length}");

//bucle for
//inicio
//limite/final
//paso (cuanto cuenta en cada vuelta?)

     // inicio     limite/final             paso
for (let index = 0; index < persona.length; index++) {
   console.log(`los datos son:${persona[index]}`);
    
}



for (let i = 0; i < persona.length; i++) {
    console.log(`los datos son:${persona[i]}`);
     
 }

 //bucle infinito

 for (let i = 0; i <10 ; i+=5) {
    console.log(`los datos son:${i}`);
     
 }


 //SWITCH-WHILE
 //el switch se utiliza cuando tengo muchos if multiples

 let dia= prompt("introduce el dia de la semana");

 switch (dia) {
    case "lunes":
        console.log("hoy tenemos clases");
        break;
        case "martes":
            console.log("hoy no tenemos clases");
            break;
         case "miercoles":
            console.log("hoy si tenemos clases");
            break;
        case "Jueves":
            console.log("hoy no tenemos clases");
            break;
            case "viernes":
                console.log("jugamos");
                break;
                case "sabado":
                    console.log("paseamos");
                    break;
                    case "domingo":
                        console.log("descansamos");
                        break;
                        default:
                            console.log("No corresponde a ningun dia de la semana");
 }



 if(dia=== "lunes"){
    console.log("hoy tenemos clases");
 }else if(dia="martes"){
    console.log("hoy no tenemos clases");
 }else if(dia=="miercoles"){
    console.log("hoy si tenemos clases");
 }else if(dia=="jueves"){
    console.log("hoy n0 tenemos clases");
 }


 //WHILE, ES UN BUCLE

 let numero=prompt("introduce un numero para e while");
let inicio=0;

 while (inicio <= numero) {
    alert(`contamos hasta ${numero} y estamos en ${inicio}`);
    console.log(`contamos hasta ${numero} y estamos en ${inicio}`);

    
    //no olvidar el limite porque sino se repite infinitamente.
    inicio++;
 }

*/

