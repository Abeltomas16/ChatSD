const rotas = require('express').Router();
const Controllers = require('../Controllers/sms')
rotas.post('/send/:emissor/:receptor', Controllers.enviar)
rotas.get('/getsms/:emissor/:receptor', Controllers.getsmsporid)
rotas.get('/getmembers/', Controllers.getmembers)
module.exports = rotas