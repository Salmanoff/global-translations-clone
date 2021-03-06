const express = require('express');
const indexRoutes = require('../controllers/index');
const router = express.Router();


router.get('/', indexRoutes.getIndex);

router.get('/translators', indexRoutes.getTranslators);

router.get('/translate', indexRoutes.getTranslate);

router.get('/profile', indexRoutes.getProfile);

module.exports = router;