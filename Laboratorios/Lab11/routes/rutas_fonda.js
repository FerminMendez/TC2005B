const express = require('express');

const router = express.Router();


router.get('/comida',(req,res)=>{
    res.send('De comida hay papas, hamburguesas y jochos'); 

});
router.get('/bebidas',(req,res)=>{
    res.send('Pa tomar nomas hay checos y awuita'); 

});

router.get('/nuevo', (req, res, next) => {
    console.log(req.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de caballos</h1><main><h2>Aquí se habla se de nuevos caballos</h2><p>Ingresa los datos del nuevo caballo:</p><form action="/caballos/nuevo" method="POST"><label for="nombre">Nombre del nuevo caballo: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/caballos/">Regresar a la lista de caballos</a></br></body></html>';
    res.send(respuesta);
});

module.exports = router;