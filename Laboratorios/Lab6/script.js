let input_jugador = document.getElementById("jugador");
input_jugador.onkeyup=()=>{
    let div_respuesta= documet.getElementById("respuesta");
    div_respuesta.innerHTML="Tu jugador favorito es"+ input_jugador.value;
}