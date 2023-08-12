
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


//Validacion Formulario contacto

let d=document;

  function formularioContacto() {
    const $form= d.querySelector(".formulario")
    let input= d.querySelectorAll(".formulario[required]");
    console.log(input);
}