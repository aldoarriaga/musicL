let nombre_usuario = document.getElementById('login-input-user');
let password_usuario = document.getElementById('login-input-password');
let btn = document.getElementById('btn_sign');

const log = () => {

    let nombre = nombre_usuario.value;
    let password = password_usuario.value;

    let usuario1 = "usuario";
    let pass1 = "12345";



    if (nombre === usuario1 && password === pass1){
     
        window.location.href = "./index.html";
        alert("Bienvenido a MUSICi");

    }else  {
        
        console.log(nombre);
        console.log(usuario1);
        console.log(password);
        console.log(pass1);
       alert("Usuario y/o contraseña incorrectos")
    }
  
}


btn.addEventListener('click', log);
