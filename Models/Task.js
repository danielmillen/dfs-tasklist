const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  completed: Boolean
});

mongoose.model('tasks', taskSchema);
