const mongoose = require('mongoose');
const TaskList = mongoose.model('lists');

module.exports = app => {
  app.get('/lists', async (req, res) => {
    var lists = await TaskList.find({});

    res.send(lists);
  });
};
