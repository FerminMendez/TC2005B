const express= require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>La fonda</title><meta charset="utf-8"></meta></head><body><h1>Página de inicio bomnita</h1><main><h2>Bienvenido otra vez</h2><p>Estos son nuestros numeros</p><ol>';
    for (let i in ['Hola','Adios']) {
        respuesta += '<li>' + i+ '</li>';
    }
    respuesta += '</ol><a href="/menu/">Ver menu</a></main></body></html>';
    response.send(respuesta);
});

app.get('/menu', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>La fonda</title><meta charset="utf-8"></meta></head><body><h1>Ora si el menu</h1><main><h2>Pa comer hay papas y awua nada mas</h2>';
    respuesta += '<a href="/">Pal inicio</a></main></body></html>';
    response.send(respuesta);
});



app.listen(3000);
