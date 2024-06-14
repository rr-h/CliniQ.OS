import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js';
import authMiddleware from '../middleware/auth.js';
import loggerMiddleware from '../middleware/logger.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);
app.use(loggerMiddleware);

app.use('/api', routes);

export default App;
