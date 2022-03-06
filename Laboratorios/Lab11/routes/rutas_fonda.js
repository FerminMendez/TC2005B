const express = require('express');

const router = express.Router();
const path = require('path');


router.get('/',(req,res)=>{
    res.send('Este es el menu que tenemos'); 

});
router.get('/comida',(req,res)=>{
    res.send('De comida hay papas, hamburguesas y jochos'); 

});
router.get('/bebidas',(req,res)=>{
    res.send('Pa tomar nomas hay checos y awuita'); 

});

module.exports = router;