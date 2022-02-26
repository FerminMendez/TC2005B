

let input_user = document.getElementById("user");
let outp = document.getElementById("out");

input_user.onkeyup = () => {
    outp.innerHTML = " Tu usuario ingresado es " + input_user.value;
}

let input_password = document.getElementById("password");
input_password.onkeyup = () => {
    outp.innerHTML = " Tu contraseña es " + input_password.value;
}

let boton_validar= document.getElementById("validate");

boton_validar.onclick=()=>{
    if(input_password.value=="123" && input_user.value=="us1"){
        alert("Bienvenido");
    }
    else{
        alert("No te conozco")
    }
}