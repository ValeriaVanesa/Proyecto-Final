//suscripcion 

let form=document.querySelector("form")
let input=document.querySelector("input")
let eventoRemover= document.getElementById("btn-suscripcion")

let remover= function(e){
    eventoRemover.removeEventListener("click", remover);
    eventoRemover.disabled=true;
}




form.addEventListener("submit", (e)=>{
e.preventDefault()
let valor=input.value
let valor_trim=valor.trim()
let longitud=valor_trim.length
console.log(encodeURIComponent(valor_trim))

if(longitud>10){
alert("gracias por suscribirte")
remover();
}
else{
    alert("Aun hay campos sin completar y/o no validos")
}

})

//boton compra

let btnCompra= document.getElementById("boton-compra")
btnCompra.addEventListener("click",comprar)
function comprar(){
    alert("Seleccione un talle")
}

let removerColor=document.getElementById("btn")
let eliminarColor=function(e){
  removerColor.style.backgroundColor="black";
  removerColor.style.color="white";
    
}
let removerColor1=document.getElementById("btn1")
let eliminarColor1=function(e){
  removerColor1.style.backgroundColor="black";
  removerColor1.style.color="white";
    
}

let removerColor2=document.getElementById("btn2")
let eliminarColor2=function(e){
  removerColor2.style.backgroundColor="black";
  removerColor2.style.color="white";
    
}

let removerColor3=document.getElementById("btn3")
let eliminarColor3=function(e){
  removerColor3.style.backgroundColor="black";
  removerColor3.style.color="white";
    
}

let removerColor4=document.getElementById("btn4")
let eliminarColor4=function(e){
  removerColor4.style.backgroundColor="black";
  removerColor4.style.color="white";
    
}

