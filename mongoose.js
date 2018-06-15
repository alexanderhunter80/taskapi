const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restfultaskdb', function(err){
    console.log('connection is up');
});

const TaskSchema = require('./task.js');

module.exports = mongoose.model('Task', TaskSchema);