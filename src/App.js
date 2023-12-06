const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
@import url('https://webfontworld.github.io/gmarket/GmarketSans.css');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/brand', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/generic.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/elements.html'));
});





app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
