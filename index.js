const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route for the root URL
app.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

// Export the app for testing
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
