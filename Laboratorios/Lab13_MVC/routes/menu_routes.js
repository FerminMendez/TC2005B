const express= require('express');
const router=express.Router();

const menuController = require('../controller/menu_controller');

router.get('/', menuController.saluda );

router.get('/menu',menuController.mandaMenu);

module.exports= router;