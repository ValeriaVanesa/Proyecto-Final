/*
let usuario
let respuesta=prompt("cual es su rol?");
if(respuesta=="admin"){
    let clave=prompt("cual es su clave?")
    if(clave==1234){
         usuario=prompt("cual es su nombre de usuario?")
    }
}
else{
    location.href="error.html"
}

document.querySelector("#header").innerHTML= "hola"+ usuario;
let empleados=[{nombre:"juan",apellido:"pedro",edad:40},{nombre:"santi",apellido:"capdevila",edad:28}]

 let mensaje="<tr><th>Nombre</th><th>apellido</th><th>edad</th></tr>"
for(i=0; i<empleados.length; i++){
    mensaje +="<tr><td>" + empleados[i].nombre + "<td>" + empleados[i].apellido + "</td><td>"+empleados[i].edad+"</td></tr>"

}

document.getElementById("caja").innerHTML += mensaje;
*/

let flujoDeCaja=[
    {periodo:"enero",
     ingresos:1500,
    egresos:1500},
    {periodo:"febrero",
     ingresos:2500,
    egresos:2500},
    {periodo:"marzo",
     ingresos:84683,
    egresos:1533},
    {periodo:"abril",
    ingresos:333445,
    egresos:2333},

];

let ingresos=0;
let egresos=0;

    for (let i = 0; i < flujoDeCaja.length; i++) {
       let actual= flujoDeCaja[i];
       ingresos+= actual.ingresos;
       egresos += actual.egresos;
        
    }

    if(ingresos<egresos){
        alert("el flujo de caja genera perdidas");
    }else{
        alert("el flujo de caja no genera perdidas");
    }

