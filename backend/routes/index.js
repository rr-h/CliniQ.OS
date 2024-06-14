import { Router } from 'express';
import { getData } from '../controllers/DataController.js';

const router = Router();

router.get('/data', getData);

export default router;
