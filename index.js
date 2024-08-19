const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Atur folder statis untuk CSS, JS, dan file lainnya
app.use(express.static(path.join(__dirname, 'public')));

// Arahkan folder views untuk file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});