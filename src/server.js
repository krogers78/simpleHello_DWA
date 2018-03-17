const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!')
});

app.post('/webhook', (req, res, next) => {
  const { creator, environment, repository_url } = req.body.deployment;
  console.log(`${creator.login} is the owner of the owner of the respository ${environment}.
              \r\nThe repository is located at ${repository_url}.`);
  console.log('REQ BODY', req.body.deployment);
  res.send('Page loaded successfully');
});

app.listen(port, () => console.log(`Server active on port: ${port}`));
