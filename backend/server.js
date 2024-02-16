const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =  process.env.PORT || 3001;
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
      console.log('app running on PORT ' + port)
});