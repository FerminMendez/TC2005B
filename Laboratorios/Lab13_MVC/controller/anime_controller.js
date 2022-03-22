const path = require('path');
const Anime = require('../models/anime');


exports.inicio = (request, response, next) => {
    console.log("Interfaz de anime");
    response.render('anime_home', {nombre: '', lista_animes: Anime.fetchAll() });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    const anime = new Anime(request.body.nombre, request.body.imagen);
    anime.save();
    response.redirect('/anime');
};