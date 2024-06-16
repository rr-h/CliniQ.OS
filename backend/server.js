// backend/server.js

const app = require('./app');
const database = require('./utils/database');

const PORT = process.env.PORT || 5000;

// Connect to the database
database.connect();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
