const path = require('path');
// const Caballo = require('../models/caballo');

exports.saluda = (request, response, next) => {
    response.render('palomas', {nombre: 'Fermin' });
};

exports.mandaMenu = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
};