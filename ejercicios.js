let login = document.getElementById("login")
let usuario = document.getElementById("nombre");
let email = document.getElementById("email");

let enviar = document.getElementById("enviar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let formcheck =document.getElementById()

const login = () => {
    let valorUsuario = usuario.value;
    let valorEmail = email.value;

    valor1.innerHTML = usuario.value;
    valor2.innerHTML = email.value;

    let usuarioCorrecto= "Juan";
    let emailCorrecto = "a@.com";

    if(valorusuario === nombreCorrecto && valorEmail === emailCorrecto){
        validar.innerHTML = "Bienvenido"
     } 
}
enviar.addEventListener("click", login)
