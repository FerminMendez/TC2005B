const express= require('express');
const router=express.Router();

const loginController = require('../controller/login_controller');

router.get('/', loginController.autenticar );

router.post('/',loginController.verificar_usuario);

module.exports= router;

// <form class="space-y-5 " action="/anime" method="POST">
// <label class="block text-sky-800" for="username">Username: </label>
// <input class="text-black" type="text" name="username" required>
// <br>
// <label for="imagen">Url de la nueva imagen</label>
// <input class="text-black" type="text" name="imagen" required>
// <br>
// <input type="submit" value="Enviar">
// </form>
