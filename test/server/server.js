const express = require('express');
const app = express();
const routes = require('./routes');
const compression = require('compression');
const bodyParser = require('body-parser');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 2000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

