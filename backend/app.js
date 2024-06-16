// backend/app.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js';
import { authMiddleware, loggerMiddleware } from '../middleware';

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);
app.use(loggerMiddleware);

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
});

export default app;
