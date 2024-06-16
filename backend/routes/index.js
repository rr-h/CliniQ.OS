// backend/routes/index.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/DataController');

router.get('/data', dataController.getAllData);
router.get('/data/:id', dataController.getDataById);
router.post('/data', dataController.addData);
router.put('/data/:id', dataController.updateData);
router.delete('/data/:id', dataController.deleteData);

module.exports = router;
