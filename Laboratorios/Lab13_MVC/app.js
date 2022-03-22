const express= require('express');
const bodyParser = require('body-parser');
const app=express();
const path = require('path');


const rutas_menu = require('./routes/menu_routes');//Importamos las rutas
const rutas_anime = require('./routes/anime_routes');//Importamos las rutas
const rutas_login = require('./routes/login_routes');//Importamos las rutas


app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/inicio', rutas_menu);
app.use('/anime', rutas_anime);
app.use('/login', rutas_login);


app.listen(4000);
