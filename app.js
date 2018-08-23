const express = require('express');
const app = express();

require('./routes/listRoutes')(app);

app.listen(8000, () => console.log('started'));
