// backend/controllers/DataController.js

import DataModel from '../models/DataModel.js';

export const getAllData = async (req, res) => {
  try {
    const data = await DataModel.getData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

// Get data by ID
export const getDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DataModel.getDataById(id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    res.status(500).json({ error: 'Failed to fetch data by ID' });
  }
};

// Add new data
export const addData = async (req, res) => {
  try {
    const newData = req.body;
    const data = await DataModel.addData(newData);
    res.status(201).json(data);
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'Failed to add data' });
  }
};

// Update data
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const data = await DataModel.updateData(id, updatedData);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Failed to update data' });
  }
};

// Delete data
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DataModel.deleteData(id);
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Failed to delete data' });
  }
};
