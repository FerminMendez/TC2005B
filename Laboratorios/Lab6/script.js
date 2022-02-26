

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
let imgref=['"https://www.presentsofmind.com.au/wp-content/uploads/2021/11/ac22086f-17a5-4db3-86b8-e9a1c7c3a0be.jpg"','"https://i5.walmartimages.com/asr/f086dd5f-e3f3-48e2-9005-8d534e9f12be_1.b7c40f79d512eed9b3771a39c97ca2be.jpeg"','"https://www.toys.co.nz/content/product/bicycle-foil-back-cobalt-3.jpg?width=710&height=710&fit=bounds&bg-color=0FFF&canvas=710%2C710"']

let product_name=["Ice cards","Fire cards","Basic cards"]
let stock=[150,58,49];
let costo_producto=[180,150,210];
boton_ver_oferta=document.getElementById("ver_oferta");
boton_ver_oferta.onclick=()=>{
    update(3);
}

function update(i){
    for(let i=1;i<=3;i++){
        newproduct(i);
    }
}
function newproduct(i){
    document.getElementById("im"+i).innerHTML='<img src='+imgref[i-1]+'alt='+product_name+' '+ 'width="500" height="600"'+'>';
    document.getElementById("name"+i).innerHTML=product_name[i-1];
    document.getElementById("costo"+i).innerHTML="Costo: "+costo_producto[i-1];
    document.getElementById("stock"+i).innerHTML="Unidades disponibles: "+stock[i-1];
    let num_label='<label for="quantity">Unidades </label>';
    let num_input='<input type="number" id="input_num'+i+'" name="Unidades" min="0" max="'+5+'" value=1 class="text-black">'
    document.getElementById("piezas_compra"+i).innerHTML=num_label+ num_input;
}


boton_compra=document.getElementById("boton_comprar");

boton_compra.onclick=()=>{
    
    msj="Tu compra es:\n";
    let cantidad_compra;
    let total=0;
    let subt=0;

    for(let i=1;i<=3;i++){
        cantidad_compra=document.getElementById("input_num"+i).value;
        if(cantidad_compra>stock[i-1]){
            alert("Compra no valida");
            return;
        }
        else{
            subt=cantidad_compra*costo_producto[i-1];
            msj+=cantidad_compra+" "+product_name[i-1]+" = "+ subt+"\n";
            total+=subt;
        }
    }
    msj+="\nTotal: "+total;

    window.alert(msj)

    if(window.confirm("¿Confirmar compra? son $"+total)){
        for(let i=1;i<=3;i++){
           stock[i-1]=stock[i-1]-document.getElementById("input_num"+i).value;
        }
        update(3);
        alert("Compra exitosa. Vuelva pronto")
    }
}