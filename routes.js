const express = require('express'),
    router = express.Router();

const Handlers = require('./controllers.js');

router.get('/', function(req, res){
    console.log('resolving getAll');
    Handlers.getAll(req, res);
});  

router.get('/:id', function(req, res){
    console.log('resolving getOne');
    Handlers.getOne(req, res);
});

router.post('', function(req, res){
    console.log('resolving create');
    Handlers.create(req, res);
});

router.put('/:id', function(req, res){
    console.log('resolving update');
    Handlers.update(req, res);
});

router.delete('/:id', function(req, res){
    console.log('resolving destroy');
    Handlers.destroy(req, res);
});

module.exports = router;