

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

// Pagina de ventas
let imgref=['"https://www.presentsofmind.com.au/wp-content/uploads/2021/11/ac22086f-17a5-4db3-86b8-e9a1c7c3a0be.jpg"',"https://www.presentsofmind.com.au/wp-content/uploads/2021/11/ac22086f-17a5-4db3-86b8-e9a1c7c3a0be.jpg","https://www.presentsofmind.com.au/wp-content/uploads/2021/11/ac22086f-17a5-4db3-86b8-e9a1c7c3a0be.jpg"]
let product_name=["Ice cards","Fire cards","Basic cards"]
let stock=[150,58,49];
let costo_producto=[180,150,210];
boton_ver_oferta=document.getElementById("ver_oferta");
boton_ver_oferta.onclick=()=>{
    document.getElementById("im"+1).innerHTML='<img src='+imgref[0]+'alt="ice cards">';
    document.getElementById("name"+1).innerHTML=product_name[0];
    document.getElementById("costo"+1).innerHTML="Costo: "+costo_producto[0];
    document.getElementById("stock"+1).innerHTML="Unidades disponibles: "+stock[0];
    let num_label='<label for="quantity">Unidades </label>';
    let num_input='<input type="number" id="input_num'+1+'" name="Unidades" min="0" max="'+5+'" class="text-black">'
    document.getElementById("piezas_compra1").innerHTML=num_label+ num_input;

}