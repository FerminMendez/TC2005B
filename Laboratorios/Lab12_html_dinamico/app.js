


console.log('Hellooo');

const express= require('express');
const { listenerCount } = require('process');
const app= express();

app.get('/',(req,res)=>{
    res.send("Hola, aqui andamos");
});

app.listen(3000);