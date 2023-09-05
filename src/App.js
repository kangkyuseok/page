const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/brand', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/generic.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/elements.html'));
});


// public 폴더를 static으로 설정
// app.use(express.static(path.join(__dirname, '../public')));





app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
