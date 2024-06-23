// backend/routes/index.js

import { Router } from 'express';
import { check } from 'express-validator';
import {
   getAllData,
   getDataById,
   addData,
   updateData,
   deleteData,
} from '../controllers/DataController.js';

const router = Router();

router.get('/data', getAllData);

router.get(
   '/data/:id',
   [check('id', 'ID must be a valid UUID').isUUID()],
   getDataById
);

router.post(
   '/data',
   [
      check('name', 'Name is required').not().isEmpty(),
      check('value', 'Value is required').not().isEmpty(),
   ],
   addData
);

router.put(
   '/data/:id',
   [
      check('id', 'ID must be a valid UUID').isUUID(),
      check('name', 'Name is required').optional().not().isEmpty(),
      check('value', 'Value is required').optional().not().isEmpty(),
   ],
   updateData
);

router.delete(
   '/data/:id',
   [check('id', 'ID must be a valid UUID').isUUID()],
   deleteData
);

export default router;
