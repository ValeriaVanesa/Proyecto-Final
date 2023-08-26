let productos=[];
function agregarProducto(){
    let producto = document.getElementById("producto").value;
    console.log("user");
    let imprimir=document.getElementById("imprimir").value;
    console.log("imprimir");

}

let productos={
    agregarProducto:producto,
    imprimirProducto:imprimir;

validarDatos(usuario,password);
}

contactos.push(producto);
for(let i= 0; i<productos.length; i++){
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
}






function validarDatos(usuario,contraseña){
console.log(contactos);
}
function imprimirproductos(){
for (let i = 0; i < contactos.length; i++) {
 console.log("los datos del cliente son ${i} - ${contactos{i}.}")
    
}
}
