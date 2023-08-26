const button = document.querySelector('button');

button. onclick= function (){
    let name=prompt("cual es tu nombre?");
    alert("hola"+ name + ", encantado de verte");
}

myName = "Vale";
myAge = 37;

let myDog= "pancha";

myName="Santiago";
myAge=28;

let myNameArray=["Cris","bob","jim"];
let myNumberArray=[10,15,40];


myNameArray[0];
myNumberArray[1];

let dog={name:"pancha", raza:"dalmata"};

let myNumber="500";
//Para saber el tipo de variable, escribir en consola typeof myNumber y me devuelve string o Number

const myInt= 5;
const myFloat= 3.24;
  
const decimal=1.765432;
const decimalof= decimal.toFixed(2);
//pongo en la consola decimalof y me aparece el numero redondeado a 1.77

let myNumber2=60;
myNumber2 +=3;

let num=60;
num++;
num--;


const flores=["rosas","jazmin","peoinas"];
for(const flowers of flores){
    console.log(flowers);
}



try{
let numero=y;
if(isNaN(numero)){
    throw new Error("el caracter introducido no es un numero");
}
console.log(numero * numero);
}catch(error){
console.log("se produjo un error"+error);
}





let numeros=[1,2,3,4,5,6,7,8,9,0];
 for(let i=0; i<numeros.length;i++){
    if(i===5){
        break;
    }
    console.log(numeros[i]);
 }

 
 for(let i=0; i<numeros.length;i++){
    if(i===5){
        continue;
    }
    console.log(numeros[i]);

 }
