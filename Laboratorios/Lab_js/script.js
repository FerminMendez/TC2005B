function outp1() {
    let num = window.prompt("Ingresa un número");
    let n1="";
    let n2="";
    let n3="";
    for (let i=1; i<=num; i++){ 
        n1 += "<td>" + i + "</td>";
        n2 += "<td>" + i*i + "</td>";
        n3 += "<td>" + i*i*i + "</td>";
        }

    let mytable = "<table><tr>"+ n1 + "<tr>"+ "<tr>" + n2 + "<tr>"+ "<tr>" + n3 + "</tr></table>";
    console.log(mytable);
    document.getElementById("output_p1").innerHTML = mytable;
}
