import { Router } from 'express';
import { getData } from '../controllers/dataController.js';

const router = Router();

router.get('/data', getData);

export default router;
