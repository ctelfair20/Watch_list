const express = require('express');
const cors = require('cors');
const { getHome } = require('./handlers.js');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', getHome);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});