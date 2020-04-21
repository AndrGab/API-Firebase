const express = require ('express');
const testeController = require   ('./controllers/testeController');
const itemController = require    ('./controllers/itemController');
const itemAllController = require ('./controllers/itemAllController');

const routes = express.Router();

routes.get('/teste', testeController.index);

routes.post  ('/create-item',      itemController.create);
routes.get   ('/read-item/:cod',   itemController.index);
routes.put   ('/update-item/:cod', itemController.update);
routes.delete('/delete-item/:cod', itemController.delete);

routes.get ('/read-itens', itemAllController.index);

    
module.exports = routes;