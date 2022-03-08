const express= require('express');
const router=express.Router();

const menuController = require('../controller/menu_controller');

router.get('/', menuController.saluda );

router.get('/menu', (request, response, next) => {
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>La fonda</title><meta charset="utf-8"></meta></head><body><h1>Ora si el menu</h1><main><h2>Pa comer hay papas y awua nada mas</h2>';
    respuesta += '<a href="/inicio">Pal inicio</a></main></body></html>';
    response.send(respuesta);
});

module.exports= router;