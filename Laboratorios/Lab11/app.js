const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//Middleword

app.use((request,response,next)=>{
    console.log('Middleword');
    next();
})

app.use((request,response,next)=>{
    console.log('Otro Middleword');
    next();
})

app.use('/hola',(request,response,next)=>{
    console.log('Ruta hola');
    response.send("Uyys que cosas, ¿no?");
})

app.use('/ruta', (request, response, next) => {
    console.log('Ruta ruta');

    response.send('Respuesta de la ruta "/ruta"'); 
});



const port=4000;
app.listen(port);