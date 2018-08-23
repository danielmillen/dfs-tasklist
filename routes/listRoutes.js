const dbConnector = require('../dbConnector.js');

module.exports = app => {
  app.get('/lists', (req, res) => {
    var lists = dbConnector.getLists();
    res.send(lists);
  });
};
