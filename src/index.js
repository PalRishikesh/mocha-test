const express = require('express');
const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).json({ message: `Hello, ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
