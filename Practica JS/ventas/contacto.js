//METODOS ARRAY EN JS

let contactos=[];
function agregarContacto(){
    let user = document.getElementById("user").value;
    console.log("user");
    let password=document.getElementById("password").value;
    console.log("password");

}

let contacto={
    usuario:user,
    pass:password;

validarDatos(usuario,password);
}

contactos.push(contacto);
for(let i= 0; i<contactos.length; i++){
    console.table("los datos de clientes son: ${i} -${contactos[i]} ");
}

if(user=="Juan" && password=="223344"){
    alert("Bienvenido a la app");


    

}else if(user== " "){
    alert("completa el campo usuario");
}else if(password== " "){
    alert("Completa el campo password")
}else if(user=="" && password==" "){
    alert("Completa los campos")
}else{
    alert("No puede ingresar a la app")
}




function validarDatos(usuario,contraseña){
console.log(contactos);
}
function imprimirContacto(){
for (let i = 0; i < contactos.length; i++) {
 console.log("los datos del cliente son ${i} - ${contactos{i}.}")
    
}
}

