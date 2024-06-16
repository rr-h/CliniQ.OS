// backend/controllers/DataController.js

const DataModel = require('../models/DataModel');
const { validationResult } = require('express-validator');

// Get all data
exports.getAllData = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Get data by ID
exports.getDataById = async (req, res) => {
  try {
    const data = await DataModel.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ msg: 'Data not found' });
    }
    res.json(data);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Data not found' });
    }
    res.status(500).send('Server Error');
  }
};

// Add new data
exports.addData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, value } = req.body;

  try {
    const newData = new DataModel({
      name,
      value,
    });

    const data = await newData.save();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update data
exports.updateData = async (req, res) => {
  const { name, value } = req.body;

  const dataFields = {};
  if (name) dataFields.name = name;
  if (value) dataFields.value = value;

  try {
    let data = await DataModel.findById(req.params.id);

    if (!data) return res.status(404).json({ msg: 'Data not found' });

    data = await DataModel.findByIdAndUpdate(
      req.params.id,
      { $set: dataFields },
      { new: true }
    );

    res.json(data);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Data not found' });
    }
    res.status(500).send('Server Error');
  }
};

// Delete data
exports.deleteData = async (req, res) => {
  try {
    let data = await DataModel.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ msg: 'Data not found' });
    }

    await DataModel.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Data removed' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Data not found' });
    }
    res.status(500).send('Server Error');
  }
};
