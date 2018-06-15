const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean},
}, {timestamps: true});

module.exports = TaskSchema;