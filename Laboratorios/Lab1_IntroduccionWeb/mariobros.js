// variable global-> una forma de declarar una variable
 var personaje="Mario";
 let otropersonaje="Luigi"; //Var vive en la todo el programa y let solo en el el espacio declarado

 console.log(personaje)//
 console.info(personaje)//
 console.warn(personaje)//
 console.error(personaje)//

 for (let i=1; i<=10; i++){
     console.log(i);
 }

 //Alert prompt y confirm
 alert("Esto es una alert");
const nombre = prompt("¿Cómo te llamas?");
console.log(nombre);
confirm("¿Estas seguro?");
//Jason esta compuesto por atributos y valores
// json{
//     atributo=dato;
// }

//Como declarar funciones tradicionalmente
function saltar(){
    console.log("mario salta");
}

//Otra forma de declarar variable

const correr=(personaje)=>console(personaje +" correr");
//Esto es basicamente el apuntador a una funcion

//Arreglos en js
const personajes=["Luigi"];
personajes.push(personaje);
personajes[2]="yoshi";
//Array .lenght crea y elimina espacios de memoria