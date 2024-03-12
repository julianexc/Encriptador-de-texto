const btnEncriptar = document.querySelector(".btn-encriptar");
const texTexto = document.querySelector(".texto");
const textmensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar =document.querySelector(".btn-desencriptar");

btnEncriptar.addEventListener("click", e=>{
  e.preventDefault();
  let texto = texTexto.value;
  
  if (texto ==texto){
    texto = texto.replace(/e/gi, "enter");
    texto = texto.replace(/i/gi, "imes");
    texto = texto.replace(/a/gi, "ai");
    texto = texto.replace(/o/gi, "ober");
    texto = texto.replace(/u/gi, "ufat");
    
    textmensaje.innerHTML = texto;

   btnCopiar.style.visibility = "inherit";

   mensajeEncriptado.remove();

   texTexto.value = "";

   textmensaje.style.maxWidth = "100%";

  }
  
})

btnDesencriptar.addEventListener("click", e=>{
  e.preventDefault();
  let texto = texTexto.value; 
  
  if (texto ==texto){
    texto = texto.replace(/ufat/gi, "u");
    texto = texto.replace(/imes/gi, "i");
    texto = texto.replace(/ai/gi, "a");
    texto = texto.replace(/ober/gi, "o");
    texto = texto.replace(/enter/gi, "e");
    
    textmensaje.innerHTML = texto;

   btnCopiar.style.visibility = "inherit";

   mensajeEncriptado.remove();

   texTexto.value = "";


 }
  
})

btnCopiar.addEventListener("click", e=>{
  e.preventDefault();
  let copiar = textmensaje;
  copiar.select();document.execCommand("copy") 

 
  
  
})


    
    
  
  





