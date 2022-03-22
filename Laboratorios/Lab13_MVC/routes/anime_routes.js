const express = require('express');
const router = express.Router();

const AnimeController = require('../controller/anime_controller');

router.get('/', AnimeController.inicio);

router.post('/',AnimeController.post_nuevo);


module.exports = router;