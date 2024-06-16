// backend/controllers/DataController.js

import DataModel from '../models/DataModel.js';
import { validationResult } from 'express-validator';

// Get all data
export const getAllData = async (req, res) => {
  try {
    const data = await DataModel.getData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
};

// Get data by ID
export const getDataById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const data = await DataModel.getDataById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    res.status(500).json({ error: 'Failed to fetch data by ID', details: error.message });
  }
};

// Add new data
export const addData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, value } = req.body;
  try {
    const newData = await DataModel.addData({ name, value });
    res.status(201).json(newData);
  } catch (error) {
    console.error('Error adding new data:', error);
    res.status(500).json({ error: 'Failed to add new data', details: error.message });
  }
};

// Update data
export const updateData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, value } = req.body;
  try {
    const updatedData = await DataModel.updateData(req.params.id, { name, value });
    if (!updatedData) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(updatedData);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Failed to update data', details: error.message });
  }
};

// Delete data
export const deleteData = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const deletedData = await DataModel.deleteData(req.params.id);
    if (!deletedData) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data', details: error.message });
  }
};
