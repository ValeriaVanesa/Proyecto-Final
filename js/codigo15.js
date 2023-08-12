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






let talle=document.getElementById("btn")
talle.addEventListener("click",seleccionTalle)

function seleccionTalle(){
    
    eliminarColor1()
    eliminarColor2()
    eliminarColor3()
    eliminarColor4()
  

    talle.style.backgroundColor="#FD5D9D";
}


let talle1=document.getElementById("btn1")
talle1.addEventListener("click",seleccionTalle1)

function seleccionTalle1(){
    eliminarColor()
    eliminarColor2()
    eliminarColor3()
    eliminarColor4()
    
  
    talle1.style.backgroundColor="#FD5D9D";
}

let talle2=document.getElementById("btn2")
talle2.addEventListener("click",seleccionTalle2)

function seleccionTalle2(){
     eliminarColor1()
     eliminarColor()
     eliminarColor3()
     eliminarColor4()
    

    talle2.style.backgroundColor="#FD5D9D";
}

let talle3=document.getElementById("btn3")
talle3.addEventListener("click",seleccionTalle3)

function seleccionTalle3(){
     eliminarColor1()
     eliminarColor()
     eliminarColor2()
     eliminarColor4()
    
     
  
    talle3.style.backgroundColor="#FD5D9D";
}

let talle4=document.getElementById("btn4")
talle4.addEventListener("click",seleccionTalle4)

function seleccionTalle4(){
     eliminarColor1()
     eliminarColor()
     eliminarColor2()
     eliminarColor3()
     

    talle4.style.backgroundColor="#FD5D9D";
}






