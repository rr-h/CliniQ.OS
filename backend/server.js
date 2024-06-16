// backend/server.js

import app from './app.js';
import database from './utils/database.js';

const PORT = process.env.PORT || 5000;

// Connect to the database
database.query('SELECT 1')
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
