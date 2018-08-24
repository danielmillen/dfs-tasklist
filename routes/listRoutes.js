const mongoose = require('mongoose');
const TaskList = mongoose.model('lists');

module.exports = app => {
  app.get('/lists', async (req, res) => {
    const searchTerms = {};

    // Mongo is case sensitive, so the search will be case sensitive.
    // There are ways around this, but for this example, I'll keep the case sensitivity
    if (req.query.search) {
      searchTerms.name = req.query.search;
    }

    // parseInt returns NaN if the value passed can't be parsed. limit and skip treat this as 0, so it's safe
    var lists = await TaskList.find(searchTerms)
      .limit(parseInt(req.query.limit))
      .skip(parseInt(req.query.skip));

    res.send(lists);
  });
};
