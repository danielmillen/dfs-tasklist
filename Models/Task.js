const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  completed: Boolean
});

module.exports = taskSchema;
