const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3001, () => {
      console.log('app running on PORT 3001')
});