const path = require('path');
const Anime = require('../models/user');

exports.autenticar = (request, response, next) => {
    response.render('login', {nombre: 'Fermin' });
};

exports.verificar_usuario = (request, response, next) => {
    console.log(request.body.username);
    console.log("Verifica usuario");
    console.log(request.body);
    response.redirect('/login');
};
