// TODO: Hook this up to the DB
module.exports = {
  getLists() {
    return [
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'Home',
        description: 'The list of things that need to be done at home\n',
        tasks: [
          {
            id: '0e2ac84f-f723-4f24-878b-44e63e7ae580',
            name: 'mow the yard',
            completed: true
          }
        ]
      }
    ];
  }
};
