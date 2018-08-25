const mongoose = require('mongoose');
const TaskList = mongoose.model('lists');
const Task = mongoose.model('tasks');

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

  app.post('/lists', async (req, res) => {
    const { name, description } = req.body;

    if (!name) {
      res.status(400);
      res.send('invalid input, object invalid');
      return;
    }

    const list = new TaskList({
      name
    });

    if (description) {
      list.description = description;
    }

    if (req.body.tasks) {
      const tasks = req.body.tasks.map(task => {
        return new Task({
          name: task.name,
          completed: task.completed || false
        });
      });

      list.tasks = tasks;
    }

    await list.save();

    res.status(201);
    res.send('item created');
  });

  app.get('/list/:listId', async (req, res) => {
    try {
      // Throws if listId isn't in the proper format for an id
      const list = await TaskList.findById(req.params.listId);

      if (!list) {
        res.status(404);
        res.send('List not found');
      }

      res.send(list);
    } catch (ex) {
      res.status(400);
      res.send('Invalid id supplied');
    }
  });

  app.post('/list/:listId/tasks', async (req, res) => {
    const { name, completed } = req.body;

    console.log(name);
    if (!name) {
      res.status(400);
      res.send('invalid input, object invalid');
      return;
    }

    const task = new Task({
      name,
      completed: completed || false
    });

    const result = await TaskList.updateOne(
      { _id: req.params.listId },
      { $push: { tasks: task.toObject() } }
    );

    if (result.nModified < 1) {
      res.status(404);
      res.send('item not found');
    } else {
      res.status(201);
      res.send('item created');
    }
  });
};
