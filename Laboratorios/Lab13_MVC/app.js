const express= require('express');
const bodyParser = require('body-parser');
const app=express();
const path = require('path');


const rutas_menu = require('./routes/menu_routes');//Importamos las rutas

app.use(bodyParser.urlencoded({extended: false}));

app.use('/inicio', rutas_menu);





app.listen(3000);
