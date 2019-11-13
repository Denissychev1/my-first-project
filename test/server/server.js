const express = require('express');
const app = express();
const routes = require('./routes');

const port = 2000;

app.use('/api', routes);

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App listening on port ${port}`);
});
