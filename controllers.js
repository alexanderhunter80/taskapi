const Task = require('./mongoose.js');

module.exports = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    destroy: destroy
}

function getAll(req, res){
    Task.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function getOne(req, res){
    Task.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function create(req, res){
    Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

function update(req, res){
    Task.findByIdAndUpdate(req.params.id, {$set: {title: req.body.title, description: req.body.description, completed: req.body.completed}})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

function destroy(req, res){
    Task.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}