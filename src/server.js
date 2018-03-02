const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.status(200).json({
    msg: 'hello world',
    author: 'kloe'
  });
});

app.listen(port, () => console.log(`Server active on port: ${port}`));