const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!')
});

app.post('/webhook', (req, res, next) => {
  console.log("THIS IS A TEST", req.pull_request.url);
  res.send('Got it.');
});

app.listen(port, () => console.log(`Server active on port: ${port}`));