const express = require('express');
const routersApi = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server express UP!s');
});

app.get('/new-route', (req, res) => {
  res.send('New route');
});

routersApi(app);

app.listen(port, () => {
  console.log('Port used: ' + port);
});
