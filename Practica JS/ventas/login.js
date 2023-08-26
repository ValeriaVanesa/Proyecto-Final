


let user = "pepe";
let password="1234Po";

let usuario= alert("ingrese su nombre");
let pass=prompt("ingrese su password");

if(user== usuario && pass==password){
    console.log("bienvenido al sistema");
     location.href="admin.html";

 
}else if(user!== usuario){

    alert("usuario incorrecto, intente denuevo");
    location.href="ventas.html";
}else{
    console.log("usuario o password incorrecto");
    location.href="error.html";

}
   



    
