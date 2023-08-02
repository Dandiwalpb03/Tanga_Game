const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Ferengi Tanga Game!');
});

app.listen(port, () => {
  console.log(`Ferengi Tanga Game server listening at http://localhost:${port}`);
});