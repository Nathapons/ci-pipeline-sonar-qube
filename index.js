const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route for the root URL
app.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
