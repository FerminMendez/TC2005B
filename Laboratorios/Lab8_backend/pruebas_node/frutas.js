const exp = require('constants');

console.log("Usted ha invocado al poderosisimo archivo de frutas.js")

function avarage(array) {
    let res = 0;
    array.forEach(element => {
        res += element;
    });
    res = res / array.length;
    return res;
}


function create_txt(text_string) {
    const filesystem = require('fs');
    filesystem.writeFileSync('nuevo.txt', text_string);
    return "Archivo creado correctamente";
}


function watermelon(w) {
    if (w % 4 == 0) {
        return "YES";
    }
    else {
        return "NO";
    }
}

exports.avarage = avarage;
exports.create_txt = create_txt;
exports.watermelon = watermelon;