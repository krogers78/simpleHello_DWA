const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!')
});

app.post('/webhook', (req, res, next) => {
  const { creator} = req.body.deployment;
  const { name, html_url } = req.body.repository;
  console.log(`${creator.login} is the owner of the owner of the respository ${name}.\r\nThe repository is located at ${html_url}.`);
  res.send('Page loaded successfully');
});

app.listen(port, () => console.log(`Server active on port: ${port}`));
