const mongoose = require('mongoose');
const Task = require('./Task');
const { Schema } = mongoose;

const taskListSchema = new Schema({
  name: String,
  description: String,
  tasks: [Task]
});

mongoose.model('lists', taskListSchema);
