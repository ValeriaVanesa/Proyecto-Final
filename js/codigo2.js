
//alert agotado Zapatillas Nike
let zapatillasNike=document.getElementById("Nike");
zapatillasNike.addEventListener("click", alert_agotado);

function alert_agotado(){
    alert("Este artículo no se encuentra disponile");
}

let btnAgotado=document.getElementById("btn-agotado");
btnAgotado.addEventListener("click", btn_agotado);

function btn_agotado(){
    alert("Este artículo no se encuentra disponible");
}

//Suscripcion
let form=document.querySelector("form")
let input=document.querySelector("input")

form.addEventListener("submit", (e)=>{
e.preventDefault()
let valor=input.value
let valor_trim=valor.trim()
let longitud=valor_trim.length
console.log(encodeURIComponent(valor_trim))

if(longitud>10){
    alert("Gracias por suscribirte a las noticias");
}
else{
    alert("Aun hay campos sin completar y/o no validos")
}

})

