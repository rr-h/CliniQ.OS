// backend/server.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dataRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api', dataRoutes);

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all handler to serve the frontend application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
