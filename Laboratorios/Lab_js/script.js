function outp1() {
    let num = window.prompt("Ingresa un número");
    let n1 = "<td>N</td>";
    let n2 = "<td>N^2</td>"
    let n3 = "<td>N^3</td>"
    for (let i = 1; i <= num; i++) {
        n1 += "<td>" + i + "</td>";
        n2 += "<td>" + i * i + "</td>";
        n3 += "<td>" + i * i * i + "</td>";
    }
    let mytable = "<table>" + "<tr>" + n1 + "<tr>" + "<tr>" + n2 + "<tr>" + "<tr>" + n3 + "</tr></table>";
    console.log(mytable);
    document.getElementById("output_p1").innerHTML = mytable;
}

function outp2() {
    let start = new Date().getTime();
    let a = generateRandomInteger(100);
    let b = generateRandomInteger(100);
    let num = window.prompt("¿Cúanto es " + a + " + " + b + "?");
    let result;
    let sum = a + b;
    if (sum == num) {
        result = "Correcto."
    }
    else {
        result = "Incorrecto. La respuesta es " + sum + ". ";
    }
    let finish = new Date().getTime();
    let time = (finish - start) / 1000;
    result += "\nTardaste " + time + " segundos";

    document.getElementById("output_p2").innerHTML = result;
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;

}

function generateRandom(max) {
    return (Math.floor(Math.random() * max) + 1) - (Math.floor(Math.random() * 2 * max) + 1);
}

function outp3() {
    let counter = [0, 0, 0];
    let n = window.prompt("Ingresa tamaño del array");
    let array = "[";
    let x;
    for (let i = 0; i < n; i++) {
        x = generateRandom(100);
        array += " " + x;
        if (x < 0) {
            counter[0] += 1;
        }
        else if (x == 0) {
            counter[1] += 1;
        }
        else if (x > 0) {
            counter[2] += 1;
        }
    }
    document.createElement("button");
    innerHTML = '<button class="text-4xl" onclick="addNum(array,window.prompt("Ingresa un número"))">Iniciar</button>'
    result = "<table><tr><td>Negativo</td><td>" + counter[0] + "</td></tr><tr><td>Zeros</td><td>" + counter[1] + "</td></tr><tr><td>Positivos</td><td>" + counter[2] + "</td></tr></table>"
    result += "<div>" + array + "]<div>";
    document.getElementById("output_p3").innerHTML = result;
}

function outp4() {
    let mat = [];
    let row;
    let mytable="<table>";
    let n = 4;
    let element;

    for (let i = 0; i < n; i++) {
        mytable += "<tr>";
        row = [];
        count = 0;
        for (let j = 0; j < n; j++) {
            element = generateRandomInteger(100);
            count += element;
            row.push(element);
            mytable += "<td>" + element + "<td>"
        }
        mat.push(row);
        mytable += "<td>" + count / n + "<td>";
        mytable += "<tr>";
    }
    mytable += "<table>";
    document.getElementById("output_p4").innerHTML = mytable;
}

function outp5(){
    let x= window.prompt("Ingresar número");
    let sol="El número "+x+" invertido es ";
    while(x>=1){
        sol+=x%10;
        x=Math.floor(x/10);
    }
    document.getElementById("output_p5").innerHTML=sol;
}

function outp6(){

    let x= window.prompt("Ingresar número");
    let sol="El número "+x+" invertido es ";
    while(x>=1){
        sol+=x%10;
        x=Math.floor(x/10);
    }
    document.getElementById("output_p5").innerHTML=sol;
}