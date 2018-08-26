# dfs-tasklist

Task-list API implementation coding exercise for DFS

# spec

Spec is defined [here](https://app.swaggerhub.com/apis/aweiker/ToDo/1.0.0)

# deviations

The spec has been deviated from in the following ways:

- The ID does not use hyphens
  - This is the default id format for mongoDb
- The ID field is listed as \_id when returned
  - Again, this is the default for mongoDb
- Removed the ID field from the POST methods
  - MongoDb & mongoose generate ID's for objects that are inserted
  - From a user's perspective, this is an implementation detail that will likely be error prone given the need for unique ID's.
- Added 404's when task lists/tasks weren't found in the /list/\<id\>/tasks and /list/\<id\>/tasks/\<taskId\>/completed methods

# installation

To install/run this example, do the following (This was build with Node v10.9.0 and NPM v6.2.0) on your local machine from a command prompt:

1) Run `git clone https://github.com/danielmillen/dfs-tasklist.git`
1) Run `cd dfs-tasklist`
1) Run `npm install`
1) Run `npm start`

At this point, the service should be running on http://localhost:8000. If it's not, it's likely that port 8000 is already in use on your local machine.
