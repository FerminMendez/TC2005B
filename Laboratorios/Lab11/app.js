const express = require ('express');
const app= express();
const bodyParser = require('body-parser');

const misRutas = require('./routes/rutas_fonda');


app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
    console.log('Segundo middle word despues del de body parser');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/menu',(req,res)=>{
    res.send('Este es el menu que tenemos'); 

})
app.get('/menu/comida',(req,res)=>{
    res.send('De comida hay papas, hamburguesas y jochos'); 

})
app.get('/menu/bebidas',(req,res)=>{
    res.send('Pa tomar nomas hay checos y awuita'); 

})




const port=3000;
app.listen(port);
//Uso de las middle words