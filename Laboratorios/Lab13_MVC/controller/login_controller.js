const path = require('path');

exports.autenticar = (request, response, next) => {
    response.render('palomas', {nombre: 'Fermin' });
};
